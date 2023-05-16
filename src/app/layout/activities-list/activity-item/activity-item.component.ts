import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

import { ActivityApiModel, ProjectApiModel } from '../../../../api/models';
import { ActivityService } from '../../../../api/services/activity.service';
import { ActivityAppService } from '../../../../app/shared/services/activity.app.service';
import { Activity } from '../../../shared/_models/activity';
import { Action } from '../../../shared/enums/action.enum';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent implements OnInit {
  public constructor(
    private activityService: ActivityService,
    private activityAppService: ActivityAppService,
    private modalService: NgbModal
  ) {}

  @Input() public activity = new Activity();
  @Output() public updateActivity: EventEmitter<Activity> = new EventEmitter();
  @Output() public editActivity: EventEmitter<Activity> = new EventEmitter();
  @Output() public canselUpdateActivityItem: EventEmitter<Activity> = new EventEmitter();
  public editableActivity = new Activity();
  public editModalTitle: Action = Action.Update;
  @Output() public removeActivityItem = new EventEmitter<number>();
  @Input() public projects: ProjectApiModel[] = [];
  @Input() public edit = false;
  public disabled = false;
  public modal: NgbActiveModal = new NgbActiveModal();

  public ngOnInit() {
    this.edit = this.activity.isNew ? true : false;
    this.activityAppService.disabledData.subscribe(data => {
      this.disabled = data;
    });
  }

  public getProjectName(activity: Activity) {
    let projectName = '';
    const project = this.projects.find(x => x.id === +activity.projectId);
    if (project) {
      return (projectName = project.name);
    }
    return projectName;
  }

  public secondsToHms(duration) {
    duration = Number(duration);
    const h = Math.floor(duration / 3600);
    const m = Math.floor((duration % 3600) / 60);
    const s = Math.floor((duration % 3600) % 60);

    const hDisplay = h > 0 ? h + (h === 1 ? ' hour ' : ' hours ') : '';
    const mDisplay = m > 0 ? m + (m === 1 ? ' minute ' : ' minutes ') : '';
    const sDisplay = s > 0 ? s + (s === 1 ? ' second' : ' seconds') : '';
    return hDisplay + mDisplay + sDisplay;
  }

  public updateShowWorkedTime(time: string) {
    let updatedTime = time;
    updatedTime = updatedTime.substring(0, updatedTime.length - 3);

    return updatedTime;
  }

  public remove(id: number) {
    this.removeActivityItem.emit(id);
  }

  public update(trackTimeContent, activity: Activity) {
    this.getActivityById(trackTimeContent, activity.id);
  }

  public editEnable() {
    this.edit = true;
    this.editActivity.emit();
    this.activityAppService.disabledSubjectTrue();
  }

  public canselEdit() {
    this.edit = false;
    this.canselUpdateActivityItem.emit(this.activity);
    this.activityAppService.disabledSubjectFalse();
  }

  public descriptionChange(event) {
    this.activity.description = event.target.value;
  }

  public getActivityById(trackTimeContent, id: number) {
    this.activityService.apiActivityGetIdGet({ id }).subscribe((data: ActivityApiModel) => {
      this.editableActivity = { ...data, isNew: false };

      this.modal = this.modalService.open(trackTimeContent, {
        ariaLabelledBy: 'modal-basic-title',
        beforeDismiss: () => false
      });
    });
  }

  public onChangeProjects(id) {
    this.activity.projectId = id;
  }

  public updateActivityItem() {
    this.updateActivity.emit(this.activity);
    this.activityAppService.disabledSubjectFalse();
  }
}
