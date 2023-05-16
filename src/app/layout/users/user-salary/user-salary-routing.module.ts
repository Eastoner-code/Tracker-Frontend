import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserSalaryComponent } from './user-salary.component';

const routes: Routes = [
  {
    path: '',
    component: UserSalaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSalaryRoutingModule {}
