/* tslint:disable */
import { AbsenceType } from './absence-type';
export interface AbsenceSalary {
  amount?: number;
  dates?: null | string;
  hoursCount?: number;
  ratePerHour?: number;
  type?: AbsenceType;
}
