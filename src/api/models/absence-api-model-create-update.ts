/* tslint:disable */
import { AbsenceApiModel } from './absence-api-model';
import { ModelStateEntry } from './model-state-entry';
export interface AbsenceApiModelCreateUpdate {
  errors?: null | { [key: string]: ModelStateEntry };
  model?: AbsenceApiModel;
  success?: boolean;
}
