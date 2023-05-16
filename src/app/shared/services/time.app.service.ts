import { Injectable } from '@angular/core';
import * as moment from 'moment';
@Injectable()
export class TimeAppService {
  public getDurationMinutes(dateFrom: Date, dateTo: Date): number {
    const diff = Math.abs(dateTo.getTime() - dateFrom.getTime());
    const minutes = Math.floor(diff / 1000 / 60);
    return minutes;
  }

  public minutesToHoursMinutes(min) {
    let hours = String(Math.floor(min / 60));
    if (hours.length === 1) {
      hours = '0' + hours;
    }
    let minutes = String(min % 60);
    if (minutes.length === 1) {
      minutes = '0' + minutes;
    }
    return `${hours}:${minutes}`;
  }

  public formatDateToBEFormatUtc(date): string {
    return moment(date).utc().format('YYYY-MM-DDTHH:mm:ss');
  }

  public formatBEUtcToNormalUTC(str: string) {
    return str + 'Z';
  }

  public getStartEndDatesOfYear(year) {
    const startOfYear = moment(new Date(year, 0, 1, 0, 0, 0, 0)).startOf('month').toDate().toLocaleDateString();
    const endOfYear = moment(new Date(year, 11, 31, 0, 0, 0, 0)).endOf('month').toDate().toLocaleDateString();
    return { startOfYear, endOfYear };
  }
}
