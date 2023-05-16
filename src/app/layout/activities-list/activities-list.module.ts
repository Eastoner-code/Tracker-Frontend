import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProjectsRoutingModule } from './activities-list-routing.module';
import { ActivitiesListComponent } from './activities-list.component';
import { ActivityItemModule } from './activity-item/activity-item.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'total', // Footer total message
        selectedMessage: 'selected' // Footer selected message
      }
    }),
    ActivityItemModule
  ],
  declarations: [ActivitiesListComponent],
  exports: [ActivitiesListComponent]
})
export class ActivitiesListModule {}
