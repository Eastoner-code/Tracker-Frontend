import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { Observable } from 'rxjs';

import { TimeAppService } from '../../../shared/services/time.app.service';

export interface ITimeRange {
  time: string;
}

export enum TimeParametrType {
  Duration = 1,
  WorkedFrom = 2,
  WorkedTo = 3
}

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {
  public constructor(private timeAppService: TimeAppService) {}

  @Input() public workedFrom = new Date(Date.now());
  @Input() public workedTo = new Date(Date.now());
  @Input() public edit = false;
  @Input() public pickerId = false;

  public timeParametrType = TimeParametrType;
  public filteredWorkFromOptions: Observable<ITimeRange[]>;
  public filteredWorkToOptions: Observable<ITimeRange[]>;
  public timeTo: string;
  public timeFrom: string;

  public darkTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#424242',
      buttonColor: '#fff'
    },
    dial: {
      dialBackgroundColor: '#555'
    },
    clockFace: {
      clockFaceBackgroundColor: '#555',
      clockHandColor: '#9fbd90',
      clockFaceTimeInactiveColor: '#fff'
    }
  };

  public ngOnInit() {
    this.setTime();
  }

  public setTime() {
    this.timeTo = `${this.workedTo.getHours()}:${this.workedTo.getMinutes()}`;
    this.timeFrom = `${this.workedFrom.getHours()}:${this.workedFrom.getMinutes()}`;
  }

  public workedFromDateChange(event) {
    this.workedTo.setFullYear(event.value.getFullYear(), event.value.getMonth(), event.value.getDate());
    this.workedFrom.setFullYear(event.value.getFullYear(), event.value.getMonth(), event.value.getDate());
  }

  public workedToTimeChange(event) {
    const hours = event.split(':');
    this.workedTo.setHours(hours[0], hours[1]);
    this.setTime();
  }

  public workedFromTimeChange(event) {
    const hours = event.split(':');
    this.workedFrom.setHours(hours[0], hours[1]);
    this.setTime();
  }

  public getDuration() {
    const minutes = this.timeAppService.getDurationMinutes(this.workedFrom, this.workedTo);
    return this.timeAppService.minutesToHoursMinutes(minutes);
  }

  public getStartOfDate() {
    const date = new Date(Date.parse(this.workedFrom.toDateString()));
    date.setTime(0);
    return date;
  }

  public displayFn(fromTime?: ITimeRange): string | undefined {
    const time = fromTime ? fromTime.time : undefined;
    return time;
  }

  public checkValidTimeRange = (control: AbstractControl) => {
    return null;
  };
}
