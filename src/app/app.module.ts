import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ToastrModule } from 'ngx-toastr';

import { ApiModule } from '../api/api.module';

import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptor } from './shared/_helpers/error.interceptor';
import { AuthGuard } from './shared/guard';
import { RoleGuardService as RoleGuard } from './shared/guard/role.guard.service';
import { AuthInterceptor } from './shared/interceptors/authInterceptor';
import { ActivityAppService } from './shared/services/activity.app.service';
import { AuthorizationAppService } from './shared/services/authorization.app.service';
import { SnackBarAppService } from './shared/services/snack-bar.app.service';
import { TimeAppService } from './shared/services/time.app.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: environment.apiUrl }),
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    NgxMaskModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule,
    MomentDateModule,
    MatSnackBarModule,
    MatInputModule,
    SharedModule
  ],
  declarations: [AppComponent],
  providers: [
    AuthGuard,
    RoleGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    TimeAppService,
    SnackBarAppService,
    AuthorizationAppService,
    ActivityAppService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
