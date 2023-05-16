import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ProjectApiModel } from '../../../api/models';
import { ProjectService } from '../../../api/services/project.service';
import { Activity } from '../../shared/_models/activity';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnInit {
  public constructor(private projectsService: ProjectService) {}

  @Output() public removeActivityList = new EventEmitter<number>();
  @Output() public updateActivity: EventEmitter<Activity> = new EventEmitter();
  @Output() public editActivity: EventEmitter<Activity> = new EventEmitter();
  @Output() public canselActivityList: EventEmitter<Activity> = new EventEmitter();
  @Output() public pageChanged: EventEmitter<Activity> = new EventEmitter();
  @Input() public activities: Activity[] = [];
  public projects: ProjectApiModel[] = [];
  @Input() public pageSize = 10;
  @Input() public page = 1;
  @Input() public count = 100;
  public ngOnInit() {
    this.getAllProjects();
  }

  public getAllProjects() {
    this.projectsService.apiProjectGetAllGet().subscribe((data: ProjectApiModel[]) => {
      this.projects = data;
    });
  }

  public updateActivityItem(event) {
    this.updateActivity.emit(event);
  }

  public editActivityItem() {
    this.editActivity.emit();
  }

  public canselActivity(event) {
    this.canselActivityList.emit(event);
  }

  public remove(event) {
    this.removeActivityList.emit(event);
  }

  public handlePageChange(event) {
    this.pageChanged.emit(event);
  }
}
