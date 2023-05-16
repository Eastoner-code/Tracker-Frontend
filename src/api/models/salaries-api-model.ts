/* tslint:disable */
import { SalaryPayedApiModel } from './salary-payed-api-model';
export interface SalariesApiModel {
  operations?: null | Array<SalaryPayedApiModel>;
  payed?: number;
  salary?: number;
  userId?: number;
  userName?: null | string;
}
