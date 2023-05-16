import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { PipesModule } from './_pipes/pipes.module';
import { ArrowMonthpickerComponent } from './components/arrow-monthpicker/arrow-monthpicker.component';
import { DirectivesModule } from './directives/directives.module';

const COMPONENTS: any[] = [ArrowMonthpickerComponent];

const DIRECTIVES: any[] = [DirectivesModule];

const PIPES: any[] = [PipesModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [],
  exports: [COMPONENTS, DIRECTIVES, PIPES]
})
export class SharedModule {}
