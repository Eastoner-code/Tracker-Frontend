import { VacancyRoutingModule } from './vacancy-routing.module';
import { VacancyComponent } from './vacancy.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    VacancyRoutingModule,
  ],
  declarations: [VacancyComponent],
  exports:[VacancyComponent]
})
export class VacancyModule {}
