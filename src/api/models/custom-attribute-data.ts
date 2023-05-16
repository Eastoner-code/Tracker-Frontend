/* tslint:disable */
import { ConstructorInfo } from './constructor-info';
import { CustomAttributeNamedArgument } from './custom-attribute-named-argument';
import { CustomAttributeTypedArgument } from './custom-attribute-typed-argument';
import { Type } from './type';
export interface CustomAttributeData {
  attributeType?: Type;
  constructor?: ConstructorInfo;
  constructorArguments?: null | Array<CustomAttributeTypedArgument>;
  namedArguments?: null | Array<CustomAttributeNamedArgument>;
}
