/* tslint:disable */
import { CustomAttributeData } from './custom-attribute-data';
import { EventAttributes } from './event-attributes';
import { MemberTypes } from './member-types';
import { MethodInfo } from './method-info';
import { Module } from './module';
import { Type } from './type';
export interface EventInfo {
  addMethod?: MethodInfo;
  attributes?: EventAttributes;
  customAttributes?: null | Array<CustomAttributeData>;
  declaringType?: Type;
  eventHandlerType?: Type;
  isCollectible?: boolean;
  isMulticast?: boolean;
  isSpecialName?: boolean;
  memberType?: MemberTypes;
  metadataToken?: number;
  module?: Module;
  name?: null | string;
  raiseMethod?: MethodInfo;
  reflectedType?: Type;
  removeMethod?: MethodInfo;
}
