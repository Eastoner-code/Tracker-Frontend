import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as moment from 'moment';

import { ActivityApiModelPagedResult, ActivityFilterPageApiModel, ProjectApiModel } from '../../../api/models';
import { ActivityService } from '../../../api/services/activity.service';
import { ProjectService } from '../../../api/services/project.service';
import { ActivityAppService } from '../../../app/shared/services/activity.app.service';
import { Activity } from '../../shared/_models/activity';
import { Action } from '../../shared/enums/action.enum';
import { TimeAppService } from '../../shared/services/time.app.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  public constructor(
    private activityService: ActivityService,
    private activityAppService: ActivityAppService,
    private projectsService: ProjectService,
    private timeAppService: TimeAppService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  public currentPage?: number = 1;
  public pageSize?: number = 10;
  public rowCount?: number = 0;
  public projectIds: number[] = [];
  public trackForm: FormGroup;
  public existActivities: Activity[] = [];
  public startDate: string = moment().startOf('month').format('YYYY-MM-DD');
  public endDate: string = moment().format('YYYY-MM-DD');
  public modal: NgbActiveModal = new NgbActiveModal();
  public createModalTitle: Action = Action.Create;
  public rows: ProjectApiModel[] = [];
  public temp = [];
  public totalTime: string;
  @ViewChild(DatatableComponent)
  public table: DatatableComponent;
  public projectData: ProjectApiModel[];
  public itemId: number[] = [];
  public isEditable: boolean = false;
  public date: FormGroup;
  public showLoader: boolean = true;

  private generateActivityRequestParams() {
    const filterActivity: ActivityFilterPageApiModel = {};
    filterActivity.startDate = this.startDate;
    filterActivity.endDate = this.endDate;
    filterActivity.projectIds = this.projectIds;
    filterActivity.page = this.currentPage;
    filterActivity.pageSize = this.pageSize;
    return filterActivity;
  }

  private initProjectData() {
    this.projectsService.apiProjectGetProjectsByUserGet().subscribe(data => {
      this.projectData = data;
      this.projectIds = this.projectData.map(item => item.id);
      this.getActivities();
    });
  }

  public trackTime(projectId) {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (user) {
      const obj = {
        userId: user.userId,
        workedToUtc: new Date(),
        workedFromUtc: new Date(new Date().setHours(new Date().getHours() - 1)),
        projectId,
        description: 'worked on: ...',
        isNew: true
      } as any;

      this.isEditable = true;
      this.activityAppService.disabledSubjectTrue();

      if (this.existActivities) {
        this.existActivities.unshift(obj);
      } else {
        this.existActivities = [obj];
      }
    }
  }

  public dateClass = (d: Date) => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? 'example-custom-date-class' : undefined;
  };

  public ngOnInit() {
    this.trackForm = this.fb.group({
      activity_project: new FormControl(''),
      activityDescription: new FormControl(''),
      activityDate: new FormControl('')
    });

    this.date = new FormGroup({
      start: new FormControl(new Date(new Date().getFullYear(), new Date().getMonth(), 1)),
      end: new FormControl(new Date())
    });
    this.initProjectData();
  }

  public getActivities() {
    if (this.projectIds && !this.projectIds.length) {
      this.existActivities = [];
    }

    if (this.startDate && this.endDate && this.projectIds?.length) {
      const filterActivity = this.generateActivityRequestParams();
      this.activityService
        .apiActivityGetPageByFilterPost({ body: filterActivity })
        .subscribe((data: ActivityApiModelPagedResult) => {
          this.showLoader = false;
          this.rowCount = data.rowCount;
          this.currentPage = data.currentPage;
          this.existActivities = data.results as Activity[];
          // Open second window for edit when you click TRACK TIME
          if (this.route.snapshot.params.projectId) {
            this.trackTime(+this.route.snapshot.params.projectId);
            this.route.snapshot.params = {};
          }

          this.existActivities.forEach(item => {
            item.workedFromUtc = new Date(this.timeAppService.formatBEUtcToNormalUTC(item.workedFromUtc));
            item.workedToUtc = new Date(this.timeAppService.formatBEUtcToNormalUTC(item.workedToUtc));
          });

          if (this.existActivities.length > 0) {
            this.countTotalTime(this.existActivities);
          }
        });
    }
  }

  public pageChanged(page) {
    this.currentPage = page;
    this.getActivities();
  }

  public onChangeProjects() {
    this.currentPage = 1;
    this.getActivities();
  }

  public get selectedProjects() {
    return this.projectData ? this.projectData.filter(data => this.projectIds.findIndex(id => id === data.id) !== -1) : [];
  }

  public countTotalTime(activities: Activity[]) {
    let diff = 0;
    activities.forEach(element => {
      if (element.workedToUtc && element.workedFromUtc) {
        diff += Math.abs((element.workedToUtc as Date).getTime() - (element.workedFromUtc as Date).getTime());
      }
    });
    const minutes = Math.floor(diff / 1000 / 60);
    this.totalTime = this.timeAppService.minutesToHoursMinutes(minutes);
  }

  public removeActivity(id: any) {
    this.activityService.apiActivityDeleteIdDelete({ id }).subscribe(() => {
      this.getActivities();
    });
  }

  public updateActivity(item: Activity) {
    const activity = { ...item };
    activity.duration = this.timeAppService.getDurationMinutes(activity.workedFromUtc, activity.workedToUtc);
    activity.workedFromUtc = this.timeAppService.formatDateToBEFormatUtc(activity.workedFromUtc);
    activity.workedToUtc = this.timeAppService.formatDateToBEFormatUtc(activity.workedToUtc);
    this.isEditable = false;
    if (activity.isNew) {
      this.activityService.apiActivityCreatePost({ body: activity }).subscribe(() => {
        this.getActivities();
      });
    } else {
      this.activityService.apiActivityUpdatePut({ body: activity }).subscribe(() => {
        this.getActivities();
      });
    }
  }

  public canselActivity() {
    this.existActivities = this.existActivities.filter(x => !x.isNew);
    this.isEditable = false;
  }

  public updateDatePicker() {
    if (this.date.value.start) {
      this.startDate = moment(this.date.value.start).format('YYYY-MM-DD');
    }
    if (this.date.value.end) {
      this.endDate = moment(this.date.value.end).format('YYYY-MM-DD');
    }
    this.currentPage = 1;
    this.getActivities();
  }

  public updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // Filter our data
    const temp = this.temp.filter(d => d.name.toLowerCase().indexOf(val) !== -1 || !val);

    // Update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  public disableTrackTime() {
    return this.selectedProjects.length === 0 || !this.selectedProjects || this.isEditable;
  }

  public editActivity() {
    this.isEditable = true;
  }
}
