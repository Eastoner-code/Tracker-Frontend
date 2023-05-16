import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/guard/auth.guard';
import { RoleGuardService as RoleGuard } from '../shared/guard/role.guard.service';

import { AbsencesComponent } from './absences/absences.component';
import { LayoutComponent } from './layout.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canLoad: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
        canLoad: [AuthGuard, RoleGuard]
      },
      {
        path: 'projects/:id',
        loadChildren: () => import('./projects/project-item/project-item.module').then(m => m.ProjectItemModule),
        canLoad: [AuthGuard, RoleGuard]
      },
      {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'holidays',
        loadChildren: () => import('./holidays/holidays.module').then(m => m.HolidaysModule),
        canLoad: [AuthGuard, RoleGuard]
      },
      {
        path: 'reports/:projectId/:workerId/:startDate/:endDate',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'activities',
        loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'notifications',
        loadChildren: () => import('./dashboard/components/notification/notification.module').then(m => m.NotificationModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        canLoad: [AuthGuard, RoleGuard]
      },
      {
        path: 'user',
        loadChildren: () => import('./users/user-item/user-item.module').then(m => m.UserItemModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'user/:id',
        loadChildren: () => import('./users/user-item/user-item.module').then(m => m.UserItemModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'user/roles/:id/:user-name',
        loadChildren: () => import('./users/user-roles/user-roles.module').then(m => m.UserRolesModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'user/salary/:id/:user-name',
        loadChildren: () => import('./users/user-salary/user-salary.module').then(m => m.UserSalaryModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'salary',
        loadChildren: () => import('./salary/salary-module').then(m => m.SalaryModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'salaries',
        loadChildren: () => import('./salaries/salaries.module').then(m => m.SalariesModule),
        canLoad: [AuthGuard, RoleGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canLoad: [AuthGuard]
      },
      {
        path: 'absences',
        component: AbsencesComponent,
        canLoad: [AuthGuard]
      },
      {
        path: 'recruitment',
        loadChildren: () => import('./recruitment/recruitment.module').then(m => m.RecruitmentModule),
        canLoad: [AuthGuard, RoleGuard]
      },
      {
        path: 'vacancies',
        loadChildren: () => import('./recruitment/vacancy/vacancy.module').then(m => m.VacancyModule),
        canLoad: [AuthGuard, RoleGuard]
      },
      {
        path: 'candidates/:id',
        loadChildren: () => import('./recruitment/vacancy/candidate/candidate/candidate.module').then(m => m.CandidateModule),
        canLoad: [AuthGuard, RoleGuard]
      },
      {
        path: 'expenses',
        loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesModule),
        canLoad: [AuthGuard, RoleGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
