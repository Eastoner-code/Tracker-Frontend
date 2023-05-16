/* tslint:disable */
import { MethodBase } from './method-base';
export interface Exception {
  data?: null | { [key: string]: {  } };
  hResult?: number;
  helpLink?: null | string;
  innerException?: Exception;
  message?: null | string;
  source?: null | string;
  stackTrace?: null | string;
  targetSite?: MethodBase;
}
