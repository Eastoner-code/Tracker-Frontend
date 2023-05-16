/* tslint:disable */
import { CustomAttributeData } from './custom-attribute-data';
import { MethodInfo } from './method-info';
import { Module } from './module';
import { SecurityRuleSet } from './security-rule-set';
import { Type } from './type';
import { TypeInfo } from './type-info';
export interface Assembly {
  codeBase?: null | string;
  customAttributes?: null | Array<CustomAttributeData>;
  definedTypes?: null | Array<TypeInfo>;
  entryPoint?: MethodInfo;
  escapedCodeBase?: null | string;
  exportedTypes?: null | Array<Type>;
  fullName?: null | string;
  globalAssemblyCache?: boolean;
  hostContext?: number;
  imageRuntimeVersion?: null | string;
  isCollectible?: boolean;
  isDynamic?: boolean;
  isFullyTrusted?: boolean;
  location?: null | string;
  manifestModule?: Module;
  modules?: null | Array<Module>;
  reflectionOnly?: boolean;
  securityRuleSet?: SecurityRuleSet;
}
