import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate.component';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    CandidateRoutingModule
  ],
  declarations: [CandidateComponent],
  exports: [CandidateComponent]
})
export class CandidateModule {}
