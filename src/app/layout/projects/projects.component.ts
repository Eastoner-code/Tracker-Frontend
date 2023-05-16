import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectApiModel } from '../../../api/models';
import { ProjectService } from '../../../api/services/project.service';
import { ProjectModel } from '../../shared/_models/projects';
import { Action } from '../../shared/enums/action.enum';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public constructor(
    private modalService: NgbModal,
    private projectsService: ProjectService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.initProjectData();

    this.createForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      mainCof: new FormControl(1, Validators.required),
      weekCof: new FormControl(1, Validators.required),
      overCof: new FormControl(1, Validators.required),
      meta: new FormControl('')
    });
  }

  public isArchive = false;
  public loading = false;
  public createForm: FormGroup;
  public modalTitle: Action = Action.Create;
  public projectData: ProjectApiModel[];
  public selectedProject: string;
  public page = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0
  };

  private initProjectData(page = 1) {
    this.loading = true;
    this.projectsService
      .apiProjectGetPageByFilterPost({ body: { pageSize: this.page.itemsPerPage, page, isArchive: this.isArchive } })
      .subscribe(data => {
        this.projectData = data.results;
        this.page = {
          itemsPerPage: data.pageSize,
          currentPage: data.currentPage,
          totalItems: data.rowCount
        };
        this.loading = false;
      });
  }

  private createProject() {
    const name = this.form.name;
    const mainCof = this.form.mainCof;
    const weekCof = this.form.weekCof;
    const overCof = this.form.overCof;
    const model: ProjectApiModel = {
      name,
      mainCof,
      weekCof,
      overCof,
      meta: '{}'
    };
    this.projectsService.apiProjectCreatePost({ body: model }).subscribe(() => {
      this.initProjectData();
      this.createForm.reset();
    });
  }

  private saveUpdateProject(row: ProjectApiModel) {
    const updatedProject = row;
    updatedProject.name = this.createForm.get('name').value;
    updatedProject.mainCof = this.createForm.get('mainCof').value;
    updatedProject.weekCof = this.createForm.get('weekCof').value;
    updatedProject.overCof = this.createForm.get('overCof').value;
    this.projectsService.apiProjectUpdatePut({ body: updatedProject }).subscribe(() => {
      this.initProjectData();
    });
  }

  public get form() {
    return this.createForm.value;
  }

  public removeProject(id: number, content) {
    this.selectedProject = this.projectData.find(item => item.id === id)?.name || '';
    this.modalService.open(content, {}).result.then(
      () => {
        this.projectsService.apiProjectDeleteIdDelete({ id }).subscribe(() => {
          this.initProjectData();
        });
      },
      () => false
    );
  }

  public restoreProject(id: number, content) {
    this.selectedProject = this.projectData.find(item => item.id === id)?.name || '';
    this.modalService.open(content, {}).result.then(
      () => {
        this.projectsService.apiProjectRestoreIdPut({ id }).subscribe(() => {
          this.initProjectData();
        });
      },
      () => false
    );
  }

  public viewProject(row: ProjectModel) {
    this.router.navigate(['/projects', row.id]);
  }

  public filterMonthChange(event) {
    this.isArchive = event.value;
    this.initProjectData(1);
  }

  public open(content) {
    this.modalTitle = Action.Create;
    this.createForm.setValue({
      name: '',
      mainCof: 1,
      overCof: 1,
      weekCof: 1,
      meta: ''
    });
    this.modalService.open(content, {}).result.then(
      () => this.createProject(),
      () => false
    );
  }

  public updateProject(row: ProjectApiModel, content) {
    this.modalTitle = Action.Update;
    this.createForm.setValue({
      name: row.name,
      mainCof: row.mainCof,
      overCof: row.overCof,
      weekCof: row.weekCof,
      meta: row.meta
    });
    this.modalService.open(content, {}).result.then(
      () => this.saveUpdateProject(row),
      () => false
    );
  }

  public pageChanged(page) {
    this.initProjectData(page);
  }
}
