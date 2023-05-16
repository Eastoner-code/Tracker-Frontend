import { CommonModule, CurrencyPipe } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../../shared/shared.module';

import { SalariesComponent } from './salaries.component';
import { SalariesRoutingModule } from './salaries.routing.module';

@NgModule({
  declarations: [SalariesComponent],
  imports: [
    CommonModule,
    SalariesRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    CurrencyPipe,
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'UAH'
    }
  ]
})
export class SalariesModule {}
