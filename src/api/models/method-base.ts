/* tslint:disable */
import { CallingConventions } from './calling-conventions';
import { CustomAttributeData } from './custom-attribute-data';
import { MemberTypes } from './member-types';
import { MethodAttributes } from './method-attributes';
import { MethodImplAttributes } from './method-impl-attributes';
import { Module } from './module';
import { RuntimeMethodHandle } from './runtime-method-handle';
import { Type } from './type';
export interface MethodBase {
  attributes?: MethodAttributes;
  callingConvention?: CallingConventions;
  containsGenericParameters?: boolean;
  customAttributes?: null | Array<CustomAttributeData>;
  declaringType?: Type;
  isAbstract?: boolean;
  isAssembly?: boolean;
  isCollectible?: boolean;
  isConstructedGenericMethod?: boolean;
  isConstructor?: boolean;
  isFamily?: boolean;
  isFamilyAndAssembly?: boolean;
  isFamilyOrAssembly?: boolean;
  isFinal?: boolean;
  isGenericMethod?: boolean;
  isGenericMethodDefinition?: boolean;
  isHideBySig?: boolean;
  isPrivate?: boolean;
  isPublic?: boolean;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
  isSpecialName?: boolean;
  isStatic?: boolean;
  isVirtual?: boolean;
  memberType?: MemberTypes;
  metadataToken?: number;
  methodHandle?: RuntimeMethodHandle;
  methodImplementationFlags?: MethodImplAttributes;
  module?: Module;
  name?: null | string;
  reflectedType?: Type;
}
