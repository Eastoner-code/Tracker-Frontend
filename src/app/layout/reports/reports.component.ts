import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import * as moment from 'moment';

import { ActivityApiModel } from '../../../api/models/activity-api-model';
import { ProjectApiModel } from '../../../api/models/project-api-model';
import { ProjectService } from '../../../api/services/project.service';
import { ReportsService } from '../../../api/services/reports.service';
import { UserService } from '../../../api/services/user.service';
import { User } from '../../shared/_models/user';
import { TimeAppService } from '../../shared/services/time.app.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  public constructor(
    private projectsService: ProjectService,
    private reportsService: ReportsService,
    private userService: UserService,
    private timeAppService: TimeAppService
  ) {}

  public activities: ActivityApiModel[];
  public tableHeders: string[];
  public tableBody: any[];
  public tableFooters: string[];
  public startDate: any = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  public endDate: any = new Date();
  public showDiagrams = false;
  public projects = new FormControl();
  public users = new FormControl();

  public projectData: ProjectApiModel[];
  public userData: User[];
  public tableTypeData: any[] = [
    {
      id: 1,
      name: 'Show by Project'
    },
    {
      id: 2,
      name: 'Show by Member'
    }
  ];
  public tableTypes = new FormControl(1);
  public showLoader: boolean = true;

  public date = new FormGroup({
    start: new FormControl({ value: this.startDate, disabled: true }, Validators.required),
    end: new FormControl({ value: this.endDate, disabled: true }, Validators.required)
  });

  private get getFilteredActivities() {
    let filteredActivities = [];
    const projectIds = this.projects.value?.length;
    const workersIds = this.users.value?.length;
    if (projectIds) {
      filteredActivities = this.activities.filter(activity => _.includes(this.projects.value, activity.projectId));
    }

    if (workersIds) {
      const activities = filteredActivities?.length ? filteredActivities : this.activities;
      filteredActivities = activities.filter(activity => _.includes(this.users.value, activity.userId));
    }
    return filteredActivities;
  }

  private initProjectData() {
    this.userService.apiUserGetAllowedGet().subscribe(data => (this.userData = data));
    this.projectsService.apiProjectGetAllGet().subscribe(data => (this.projectData = data));
  }

  private generateProjectReport() {
    this.tableBody = [];
    const filtersOn = this.users.value?.length || this.projects.value?.length;
    const activities = this.getFilteredActivities?.length || filtersOn ? this.getFilteredActivities : this.activities;
    const groupedByDate = _.groupBy(activities, x => new Date(x.workedFromUtc).toLocaleDateString());
    const groupedByProject = _.groupBy(activities, x => x.projectId);

    const projectIds = Object.keys(groupedByProject);
    const dates = Object.keys(groupedByDate);

    const projectIdNames = [];
    const durationByDateProject = [];

    projectIds.forEach(projectId => {
      projectIdNames[projectId] = this.projectData?.find(p => p.id.toString() === projectId)?.name;
    });

    projectIds.forEach(projectId => {
      const row = [projectIdNames[projectId]];
      let rowTotal = 0;

      dates.forEach(date => {
        const currentActivities = activities.filter(
          x => x.projectId.toString() === projectId && new Date(x.workedFromUtc).toLocaleDateString() === date
        );

        const duration = _.sumBy(currentActivities, x => x.duration);
        durationByDateProject[date + projectId] = duration;
        rowTotal += duration;
        row.push(this.timeAppService.minutesToHoursMinutes(duration));
      });
      row.push(this.timeAppService.minutesToHoursMinutes(rowTotal));
      this.tableBody.push(row);
    });
    this.tableFooters = ['Total'];

    let totalSummary = 0;
    dates.forEach(date => {
      let dateTotal = 0;
      projectIds.forEach(projectId => {
        dateTotal += durationByDateProject[date + projectId];
      });
      totalSummary += dateTotal;
      this.tableFooters.push(this.timeAppService.minutesToHoursMinutes(dateTotal));
    });
    this.tableFooters.push(this.timeAppService.minutesToHoursMinutes(totalSummary));

    this.tableHeders = dates;
    this.tableHeders.unshift('Project');
    this.tableHeders.push('Total');
  }

  private generateMemberReport() {
    this.tableBody = [];
    const filtersOn = this.users.value?.length || this.projects.value?.length;
    const activities = this.getFilteredActivities?.length || filtersOn ? this.getFilteredActivities : this.activities;
    const groupedByDate = _.groupBy(activities, x => new Date(x.workedFromUtc).toLocaleDateString());
    const groupedByMember = _.groupBy(activities, x => x.userId);

    const memberIds = Object.keys(groupedByMember);
    const dates = Object.keys(groupedByDate);

    const memberIdNames = [];
    const durationByDateProject = [];

    memberIds.forEach(memberId => {
      const member = this.userData.find(p => p.userId.toString() === memberId);
      memberIdNames[memberId] = `${member.firstName} ${member.lastName}`;
    });

    memberIds.forEach(memberId => {
      const row = [memberIdNames[memberId]];
      let rowTotal = 0;
      dates.forEach(date => {
        const currentActivities = activities.filter(
          x => x.userId.toString() === memberId && new Date(x.workedFromUtc).toLocaleDateString() === date
        );

        const duration = _.sumBy(currentActivities, x => x.duration);
        durationByDateProject[date + memberId] = duration;
        rowTotal += duration;
        row.push(this.timeAppService.minutesToHoursMinutes(duration));
      });
      row.push(this.timeAppService.minutesToHoursMinutes(rowTotal));
      this.tableBody.push(row);
    });
    this.tableFooters = ['Total'];

    let totalSummary = 0;
    dates.forEach(date => {
      let dateTotal = 0;
      memberIds.forEach(memberId => {
        dateTotal += durationByDateProject[date + memberId];
      });
      totalSummary += dateTotal;
      this.tableFooters.push(this.timeAppService.minutesToHoursMinutes(dateTotal));
    });
    this.tableFooters.push(this.timeAppService.minutesToHoursMinutes(totalSummary));

    this.tableHeders = dates;
    this.tableHeders.unshift('Users');
    this.tableHeders.push('Total');
  }

  private loadReport() {
    this.reportsService
      .apiReportsGetByFilterPost({
        body: {
          userIds: this.users.value,
          endDate: moment(this.endDate).format('YYYY-MM-DD'),
          projectIds: this.projects.value,
          startDate: moment(this.startDate).format('YYYY-MM-DD')
        }
      })
      .subscribe(data => {
        this.showDiagrams = true;
        this.activities = data;
        this.generateProjectReport();
      });
  }

  public ngOnInit() {
    this.initProjectData();
    this.loadReport();
  }

  public get getProjectsPlaceholder() {
    return !this.projects?.value?.length ? 'Select Project' : `Projects(${this.projects.value.length})`;
  }

  public get getWorkersPlaceholder() {
    return !this.users?.value?.length ? 'Select Members' : `Members(${this.users.value.length})`;
  }

  public updateDatePicker() {
    if (this.date.value.end) {
      this.startDate = moment(this.date.value.start).format('YYYY-MM-DD');
      this.endDate = moment(this.date.value.end).format('YYYY-MM-DD');
      this.loadReport();
    }
  }

  public onChangeTableType() {
    if (this.tableTypes.value === 1) {
      this.generateProjectReport();
    } else {
      this.generateMemberReport();
    }
  }
}
