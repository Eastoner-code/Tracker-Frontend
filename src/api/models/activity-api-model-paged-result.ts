/* tslint:disable */
import { ActivityApiModel } from './activity-api-model';
export interface ActivityApiModelPagedResult {
  currentPage?: number;
  firstRowOnPage?: number;
  lastRowOnPage?: number;
  pageCount?: number;
  pageSize?: number;
  results?: null | Array<ActivityApiModel>;
  rowCount?: number;
}
