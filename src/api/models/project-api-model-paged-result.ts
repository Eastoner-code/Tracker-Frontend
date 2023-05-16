/* tslint:disable */
import { ProjectApiModel } from './project-api-model';
export interface ProjectApiModelPagedResult {
  currentPage?: number;
  firstRowOnPage?: number;
  lastRowOnPage?: number;
  pageCount?: number;
  pageSize?: number;
  results?: null | Array<ProjectApiModel>;
  rowCount?: number;
}
