import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'absenceType' })
export class AbsenceTypePipe implements PipeTransform {
  public transform(value: number): string {
    switch (value) {
      case 1:
        return 'Vacation';
      case 2:
        return 'Sick Leave';
      case 3:
        return 'Day Off';
      default:
        return 'No type';
    }
  }
}
