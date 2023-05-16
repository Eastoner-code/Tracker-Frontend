import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AbsenceTypePipe } from './absence-type.pipe';

const PIPES: any = [AbsenceTypePipe];

@NgModule({
  imports: [CommonModule],
  declarations: PIPES,
  providers: [],
  exports: PIPES
})
export class PipesModule {}
