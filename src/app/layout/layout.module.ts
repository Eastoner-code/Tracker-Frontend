import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbAlertModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { AuthorizationModule } from '../authorization/authorization.module';
import { SharedModule } from '../shared/shared.module';

import { AbsencesComponent } from './absences/absences.component';
import { AbsenceStatusPipe } from './absences/pipes/absence-status.pipe';
import { RequestAbsenceModalComponent } from './absences/request-absence-modal/request-absence-modal.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationAlertComponent } from './dashboard/components/notification-alert/notification-alert.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AuthorizationModule,
    MatInputModule,
    MatTabsModule,
    MatPasswordStrengthModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    NgbAlertModule,
    SharedModule,
    MatIconModule
  ],

  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    NotificationAlertComponent,
    ProfileComponent,
    AbsencesComponent,
    RequestAbsenceModalComponent,
    AbsenceStatusPipe,
  ]
})
export class LayoutModule {}
