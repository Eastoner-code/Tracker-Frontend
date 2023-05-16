/* tslint:disable */
import { CustomAttributeData } from './custom-attribute-data';
import { MemberInfo } from './member-info';
import { ParameterAttributes } from './parameter-attributes';
import { Type } from './type';
export interface ParameterInfo {
  attributes?: ParameterAttributes;
  customAttributes?: null | Array<CustomAttributeData>;
  defaultValue?: null | {  };
  hasDefaultValue?: boolean;
  isIn?: boolean;
  isLcid?: boolean;
  isOptional?: boolean;
  isOut?: boolean;
  isRetval?: boolean;
  member?: MemberInfo;
  metadataToken?: number;
  name?: null | string;
  parameterType?: Type;
  position?: number;
  rawDefaultValue?: null | {  };
}
