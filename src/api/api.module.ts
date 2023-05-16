/* tslint:disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AbsenceService } from './services/absence.service';
import { ActivityService } from './services/activity.service';
import { CustomerService } from './services/customer.service';
import { HolidayService } from './services/holiday.service';
import { NotificationService } from './services/notification.service';
import { PositionService } from './services/position.service';
import { ProjectService } from './services/project.service';
import { RecruitmentService } from './services/recruitment.service';
import { ReportsService } from './services/reports.service';
import { SalaryService } from './services/salary.service';
import { SalaryCalculationService } from './services/salary-calculation.service';
import { SkillService } from './services/skill.service';
import { UserService } from './services/user.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AbsenceService,
    ActivityService,
    CustomerService,
    HolidayService,
    NotificationService,
    PositionService,
    ProjectService,
    RecruitmentService,
    ReportsService,
    SalaryService,
    SalaryCalculationService,
    SkillService,
    UserService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
