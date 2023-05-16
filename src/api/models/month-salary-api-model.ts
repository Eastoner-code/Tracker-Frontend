/* tslint:disable */
import { AbsenceSalary } from './absence-salary';
import { ActivitySalary } from './activity-salary';
import { PublicHolidaySalary } from './public-holiday-salary';
export interface MonthSalaryApiModel {
  absenceSalaries?: null | Array<AbsenceSalary>;
  activitySalaries?: null | Array<ActivitySalary>;
  month?: number;
  monthAmount?: number;
  publicHolidaySalaries?: null | Array<PublicHolidaySalary>;
  year?: number;
}
