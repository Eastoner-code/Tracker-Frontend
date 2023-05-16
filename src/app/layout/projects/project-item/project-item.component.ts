import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectApiModel, UserApiModel } from '../../../../api/models';
import { ProjectService, UserService } from '../../../../api/services';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [routerTransition()]
})
export class ProjectItemComponent implements OnInit {
  public get projectId(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }
  public constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private projectService: ProjectService,
    private userService: UserService
  ) {
    projectService.apiProjectGetIdGet({ id: this.projectId }).subscribe(res => {
      this.project = res;
    });
  }

  private membersData: UserApiModel[] = [];
  public project: ProjectApiModel = {};
  public selectedMember: number = null;
  public member = new FormControl();
  public dataSource: UserApiModel[] = [];
  public profileForm = new FormGroup({
    name: new FormControl('')
  });
  private getUsetByProject() {
    this.userService
      .apiUserGetUsersByProjectIdProjectIdGet({
        projectId: this.projectId
      })
      .subscribe(res => (this.dataSource = res));
  }
  private getUsers() {
    this.userService.apiUserGetAllGet().subscribe(res => (this.membersData = res));
  }

  public get getNewMembers() {
    return this.membersData.filter(member => !this.dataSource.find(assignedMember => member.userId === assignedMember.userId));
  }

  public get customerUrl(): string {
    const parsedUrl = new URL(window.location.href);
    return `${parsedUrl.origin}/customer-report/${this.project.customerUrl}`;
  }

  public removeUser(id) {
    this.projectService
      .apiProjectRemoveUsersFromProjectPut({
        userId: id,
        projectId: this.projectId
      })
      .subscribe(res => {
        if (res) {
          this.getUsetByProject();
        }
      });
  }

  public addUser() {
    this.projectService
      .apiProjectAddUsersToProjectPut({
        userId: this.selectedMember,
        projectId: this.projectId
      })
      .subscribe(res => {
        if (res) {
          this.getUsetByProject();
        }
      });
  }

  public ngOnInit() {
    this.getUsetByProject();
    this.getUsers();
  }

  public open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(result => {
        if (result) {
          this.addUser();
        }
      })
      .finally(() => {
        this.selectedMember = null;
      });
  }

  public closeModal(modal: NgbActiveModal) {
    modal.close();
  }
}
