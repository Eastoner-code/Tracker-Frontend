import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { TimePickerModule } from '../../activities/time-picker/time-picker.module';

import { ActivityItemRoutingModule } from './activity-item-routing.module';
import { ActivityItemComponent } from './activity-item.component';

@NgModule({
  declarations: [ActivityItemComponent],
  exports: [ActivityItemComponent],
  imports: [
    CommonModule,
    ActivityItemRoutingModule,
    NgxDatatableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    TimePickerModule,
    MatDatepickerModule
  ]
})
export class ActivityItemModule {}
