/* tslint:disable */
import { CustomAttributeTypedArgument } from './custom-attribute-typed-argument';
import { MemberInfo } from './member-info';
export interface CustomAttributeNamedArgument {
  isField?: boolean;
  memberInfo?: MemberInfo;
  memberName?: null | string;
  typedValue?: CustomAttributeTypedArgument;
}
