
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VacancyComponent } from './vacancy.component';

import { RoleGuardService as RoleGuard } from 'src/app/shared/guard/role.guard.service';
import { AuthGuard } from 'src/app/shared/guard';

const routes: Routes = [
  {
    path: '',
    component: VacancyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacancyRoutingModule {}
