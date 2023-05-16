import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GeneralCustomerReportApiModal, TimeCustomerReportApiModal, TimeCustomerReportForPeriodApiModal } from '../../api/models';
import { CustomerService } from '../../api/services';
import { TimeAppService } from '../shared/services/time.app.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerDashboardComponent {  
  public loading = false;
  public generalTableDisplayedColumns = [];
  public generalTableDisplayedWeeks = [];
  public detailsTableDisplayedColumns = [];

  public preMonth: boolean = false;

  public dataSource: GeneralCustomerReportApiModal;

  public constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public timeAppService: TimeAppService
  ) {
    this.initData();
  }

  public get customerUrl() {
    return this.activatedRoute.snapshot.params.id;
  }

  public initData() {
    this.loading = true;
    this.generalTableDisplayedColumns = ['user'];
    this.detailsTableDisplayedColumns = ['description', 'worker', 'duration', 'time'];
    let date = new Date();
    if (this.preMonth) {
      date = new Date(date.getFullYear(), date.getMonth() - 1, 4);
    }
    this.generalTableDisplayedWeeks = this.getWeeksInMonth(date.getMonth(), date.getFullYear());
    this.generalTableDisplayedColumns.push(...this.generalTableDisplayedWeeks);
    this.generalTableDisplayedColumns.push('total');
    this.customerService
      .apiCustomerCustomerReportGet({
        customerUrl: this.customerUrl,
        preMonth: this.preMonth,
        timezoneOffset: new Date().getTimezoneOffset()
      })
      .subscribe(
        res => {
          if (!res) {
            this.router.navigate(['customer-report']);
          }
          res.activities.forEach(activitie => {
            activitie.date = activitie.date.split('T')[0];
          });
          this.dataSource = res;
          this.loading = false;
        },
        error => {
          this.router.navigate(['customer-report']);
        }
      );
  }

  public GetWeekTotalHours(week, items: TimeCustomerReportForPeriodApiModal[]) {
    const index = this.generalTableDisplayedWeeks.findIndex(x => x === week);
    const item = items[index];
    return `${item.hours}:${item.minutes}`;
  }

  public getWeeksInMonth(month, year) {
    const weeks = [];
    const firstDate = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0);
    const numDays = lastDate.getDate();

    let start = 1;
    let end = 7 - firstDate.getDay();
    const realMonth = month + 1;
    const monthStr = realMonth < 10 ? '0' + realMonth : realMonth;
    while (start <= numDays) {
      weeks.push(`${start}/${monthStr} - ${end}/${monthStr}`);
      start = end + 1;
      end = end + 7;
      if (end > numDays) {
        end = numDays;
      }
    }
    return weeks;
  }

  public filterMonthChange(event) {
    this.preMonth = event.value;
    this.initData();
  }
}
