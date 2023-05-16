import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskModule } from 'ngx-mask';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { TimePickerComponent } from './time-picker.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgxMaskModule.forRoot({ showMaskTyped: true }),
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NgxMaterialTimepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  exports: [TimePickerComponent],
  declarations: [TimePickerComponent],
  providers: []
})
export class TimePickerModule {}
