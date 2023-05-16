import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IsAdminDirective } from './is-admin-directive';
import { IsSuperAdminDirective } from './is-super-admin-directive';

const DIRECTIVES = [IsAdminDirective, IsSuperAdminDirective];

@NgModule({
  imports: [CommonModule],
  declarations: DIRECTIVES,
  providers: [],
  exports: DIRECTIVES
})
export class DirectivesModule {}
