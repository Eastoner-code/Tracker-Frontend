import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { Moment } from 'moment';
// tslint:disable-next-line: no-duplicate-imports
import * as moment from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MMMM YYYY'
  },
  display: {
    dateInput: 'MMMM YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@Component({
  selector: 'app-arrow-monthpicker',
  templateUrl: './arrow-monthpicker.component.html',
  styleUrls: ['./arrow-monthpicker.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class ArrowMonthpickerComponent implements OnInit {
  @Output() private onMonthChange = new EventEmitter<FormControl>();

  public monthFormControl = new FormControl();
  public selectedMonth: FormControl;
  public max: Moment;
  public min: Moment;
  public dateFormat: string = 'MM-DD-YYYY';

  public ngOnInit(): void {
    this.max = moment();
    this.min = moment('01-01-2019', this.dateFormat);
    this.selectedMonth = new FormControl(moment());
    this.selectedMonth.disable();
    this.onMonthChange.emit(this.selectedMonth);
  }

  public get outRangeLeft() {
    return this.selectedMonth.value < this.min;
  }

  public get outRangeRight() {
    return this.selectedMonth.value.month() === this.max.month() && this.selectedMonth.value.year() === this.max.year();
  }

  public chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.selectedMonth.value;
    ctrlValue.year(normalizedYear.year());
    this.selectedMonth.setValue(ctrlValue);
    this.onMonthChange.emit(this.selectedMonth);
  }

  public chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.selectedMonth.value;
    ctrlValue.month(normalizedMonth.month());
    this.selectedMonth.setValue(ctrlValue);
    this.onMonthChange.emit(this.selectedMonth);
    datepicker.close();
  }

  public nextMonth() {
    if (!this.outRangeRight) {
      const ctrlValue = this.selectedMonth.value;
      ctrlValue.add(1, 'months');
      this.selectedMonth.setValue(ctrlValue);
      this.onMonthChange.emit(this.selectedMonth);
    }
  }

  public previousMonth() {
    if (!this.outRangeLeft) {
      const ctrlValue = this.selectedMonth.value;
      ctrlValue.add(-1, 'months');
      this.selectedMonth.setValue(ctrlValue);
      this.onMonthChange.emit(this.selectedMonth);
    }
  }
}
