import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerDashboardComponent } from './customer-dashboard.component';

const routes: Routes = [
  {
    path: ':id',
    component: CustomerDashboardComponent
  },
  { path: '**', loadChildren: () => import('../not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDashboardRoutingModule {}
