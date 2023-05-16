import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { LoaderModule } from '../../../shared/_helpers/loader/loader.module';

import { UserItemRoutingModule } from './user-item-routing.module';
import { UserItemComponent } from './user-item.component';

@NgModule({
  declarations: [UserItemComponent],
  imports: [
    CommonModule,
    UserItemRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatProgressSpinnerModule,
    LoaderModule
  ]
})
export class UserItemModule {}
