import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'absenceStatus' })
export class AbsenceStatusPipe implements PipeTransform {
  public transform(value: number): string {
    switch (value) {
      case 1:
        return 'Pending';
      case 2:
        return 'Approved';
      case 3:
        return 'Rejected';
      default:
        return 'No status';
    }
  }
}
