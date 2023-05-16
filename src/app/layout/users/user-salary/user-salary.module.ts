import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ConfirmDialogComponent } from '../../../shared/_helpers/confirm-dialog/confirm-dialog.component';
import { LoaderModule } from '../../../shared/_helpers/loader/loader.module';

import { UserSalaryRoutingModule } from './user-salary-routing.module';
import { UserSalaryComponent } from './user-salary.component';

@NgModule({
  declarations: [UserSalaryComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    UserSalaryRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatProgressSpinnerModule,
    LoaderModule,
    DragDropModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class UserSalaryModule {}
