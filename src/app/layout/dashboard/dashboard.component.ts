import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectApiModel } from '../../../api/models';
import { ProjectService } from '../../../api/services/project.service';
import { routerTransition } from '../../router.animations';
import { Action } from '../../shared/enums/action.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  public constructor(private projectsService: ProjectService, private router: Router) {}

  public activeProjects: ProjectApiModel[] = [];
  public modal: NgbActiveModal = new NgbActiveModal();
  public createModalTitle: Action = Action.Create;
  public ngOnInit() {
    this.projectsService.apiProjectGetAllGet().subscribe((data: ProjectApiModel[]) => {
      this.activeProjects = data;
    });
  }

  public trackTime(project: ProjectApiModel) {
    this.router.navigate(['/activities', { projectId: project.id }]);
  }
}
