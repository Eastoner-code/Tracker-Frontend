/* tslint:disable */
import { Assembly } from './assembly';
import { CustomAttributeData } from './custom-attribute-data';
import { ModuleHandle } from './module-handle';
export interface Module {
  assembly?: Assembly;
  customAttributes?: null | Array<CustomAttributeData>;
  fullyQualifiedName?: null | string;
  mdStreamVersion?: number;
  metadataToken?: number;
  moduleHandle?: ModuleHandle;
  moduleVersionId?: string;
  name?: null | string;
  scopeName?: null | string;
}
