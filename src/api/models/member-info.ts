/* tslint:disable */
import { CustomAttributeData } from './custom-attribute-data';
import { MemberTypes } from './member-types';
import { Module } from './module';
import { Type } from './type';
export interface MemberInfo {
  customAttributes?: null | Array<CustomAttributeData>;
  declaringType?: Type;
  isCollectible?: boolean;
  memberType?: MemberTypes;
  metadataToken?: number;
  module?: Module;
  name?: null | string;
  reflectedType?: Type;
}
