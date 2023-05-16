import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectItemComponent } from './project-item.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectItemRoutingModule {}
