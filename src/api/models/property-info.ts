/* tslint:disable */
import { CustomAttributeData } from './custom-attribute-data';
import { MemberTypes } from './member-types';
import { MethodInfo } from './method-info';
import { Module } from './module';
import { PropertyAttributes } from './property-attributes';
import { Type } from './type';
export interface PropertyInfo {
  attributes?: PropertyAttributes;
  canRead?: boolean;
  canWrite?: boolean;
  customAttributes?: null | Array<CustomAttributeData>;
  declaringType?: Type;
  getMethod?: MethodInfo;
  isCollectible?: boolean;
  isSpecialName?: boolean;
  memberType?: MemberTypes;
  metadataToken?: number;
  module?: Module;
  name?: null | string;
  propertyType?: Type;
  reflectedType?: Type;
  setMethod?: MethodInfo;
}
