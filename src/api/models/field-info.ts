/* tslint:disable */
import { CustomAttributeData } from './custom-attribute-data';
import { FieldAttributes } from './field-attributes';
import { MemberTypes } from './member-types';
import { Module } from './module';
import { RuntimeFieldHandle } from './runtime-field-handle';
import { Type } from './type';
export interface FieldInfo {
  attributes?: FieldAttributes;
  customAttributes?: null | Array<CustomAttributeData>;
  declaringType?: Type;
  fieldHandle?: RuntimeFieldHandle;
  fieldType?: Type;
  isAssembly?: boolean;
  isCollectible?: boolean;
  isFamily?: boolean;
  isFamilyAndAssembly?: boolean;
  isFamilyOrAssembly?: boolean;
  isInitOnly?: boolean;
  isLiteral?: boolean;
  isNotSerialized?: boolean;
  isPinvokeImpl?: boolean;
  isPrivate?: boolean;
  isPublic?: boolean;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
  isSpecialName?: boolean;
  isStatic?: boolean;
  memberType?: MemberTypes;
  metadataToken?: number;
  module?: Module;
  name?: null | string;
  reflectedType?: Type;
}
