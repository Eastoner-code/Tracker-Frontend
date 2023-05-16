import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _ from 'lodash';

import { ActivitySalary, MonthSalaryApiModel, UserApiModel } from '../../../api/models';
import { SalaryCalculationService } from '../../../api/services/salary-calculation.service';
import { AuthorizationAppService } from '../../shared/services/authorization.app.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {
  public constructor(
    private calculationService: SalaryCalculationService,
    private authorizationAppService: AuthorizationAppService
  ) {
    this.authorizationAppService.currentUser.subscribe(x => (this.currentUser = x));
  }

  public activitySalaries: ActivitySalary[];

  public salary: MonthSalaryApiModel = {};
  public currentUser: UserApiModel;

  public dateFormat: string = 'MM-DD-YYYY';
  public selectedMonth: FormControl;

  private loadSalary() {
    if (this.selectedMonth && this.currentUser) {
      this.calculationService
        .apiSalaryCalculationGetSalaryByUserIdMonthUserIdMonthYearGet({
          userId: this.currentUser.id,
          month: this.selectedMonth.value.month(),
          year: this.selectedMonth.value.year()
        })
        .subscribe(data => {
          this.salary = data;
        });
    }
  }

  public ngOnInit() {
    this.loadSalary();
  }

  public onMonthChangeEvent(event: FormControl): void {
    this.selectedMonth = event;
    this.loadSalary();
  }
}
