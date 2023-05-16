/* tslint:disable */
import { ModelError } from './model-error';
import { ModelValidationState } from './model-validation-state';
export interface ModelStateEntry {
  attemptedValue?: null | string;
  children?: null | Array<ModelStateEntry>;
  errors?: null | Array<ModelError>;
  isContainerNode?: boolean;
  rawValue?: null | {  };
  validationState?: ModelValidationState;
}
