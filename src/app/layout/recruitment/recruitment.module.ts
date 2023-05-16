import { CandidateModule } from './vacancy/candidate/candidate/candidate.module';
import { VacancyModule } from './vacancy/vacancy.module';
import { RecruitmentComponent } from './recruitment.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { RecruitmentRoutingModule } from './recruitment-routing.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatTabsModule,

    RecruitmentRoutingModule,
    VacancyModule,
    CandidateModule
  ],

  declarations: [
    RecruitmentComponent,
  ]
})
export class RecruitmentModule {}
