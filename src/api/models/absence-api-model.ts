/* tslint:disable */
import { AbsenceStatus } from './absence-status';
import { AbsenceType } from './absence-type';
export interface AbsenceApiModel {
  approvedByUserId?: null | number;
  description?: null | string;
  endDate?: string;
  endDateLocal?: string;
  id?: number;
  isFullDay?: boolean;
  startDate?: string;
  startDateLocal?: string;
  status?: AbsenceStatus;
  totalDays?: number;
  type?: AbsenceType;
  userId?: number;
  userName?: null | string;
}
