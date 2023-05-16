/* tslint:disable */
import { NotificationApiModel } from './notification-api-model';
export interface NotificationApiModelPagedResult {
  currentPage?: number;
  firstRowOnPage?: number;
  lastRowOnPage?: number;
  pageCount?: number;
  pageSize?: number;
  results?: null | Array<NotificationApiModel>;
  rowCount?: number;
}
