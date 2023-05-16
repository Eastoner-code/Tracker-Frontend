import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

import { HolidayApiModel } from '../../../api/models';
import { HolidayService } from '../../../api/services/holiday.service';
import { SnackBarAppService } from '../../../app/shared/services/snack-bar.app.service';
import { TimeAppService } from '../../shared/services/time.app.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
  public constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private holidayService: HolidayService,
    private router: Router,
    private snackBarAppService: SnackBarAppService,
    private timeAppService: TimeAppService
  ) {
    this.loadYears();
  }
  public holidaysForm: FormGroup = this.fb.group({
    holidays: ['', Validators.required],
    year: [new Date().getFullYear(), Validators.required]
  });

  public years: number[] = [];
  public holidays: string = '';
  public holidaysData: HolidayApiModel[] = [];

  private loadYears() {
    const currentYear = new Date().getFullYear();
    for (let index = currentYear; index > currentYear - 3; index--) {
      this.years.push(index);
    }
  }

  private splitMulti(str, tokens) {
    const tempChar = tokens[0]; // We can use the first token as a temporary join character
    for (let i = 1; i < tokens.length; i++) {
      str = str.split(tokens[i]).join(tempChar);
    }
    str = str.split(tempChar);
    return str;
  }

  private loadHolidays() {
    const { startOfYear, endOfYear } = this.timeAppService.getStartEndDatesOfYear(this.holidaysForm.value.year);

    this.holidayService
      .apiHolidayGetHolidaysByYearsGet({
        from: startOfYear,
        to: endOfYear
      })
      .subscribe(data => {
        const holidays = data.map(x => new Date(x.date).toLocaleDateString() + ' - ' + x.description).join('\n');
        this.holidaysForm.reset({
          holidays,
          year: this.holidaysForm.value.year
        });
      });
  }

  public ngOnInit() {
    this.loadHolidays();
  }

  public update(content) {
    const formData = this.holidaysForm.value;
    const lines = formData.holidays.split('\n');
    this.holidaysData = [];
    lines.forEach(line => {
      const parts = this.splitMulti(line, [',', ';', '\t', '-', '—']);
      if (parts && parts.length >= 2) {
        const date = parts[0].trim();
        const description = parts.slice(1).join(' ').trim();
        this.holidaysData.push({
          date,
          description
        });
      }
    });

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(reason => {
      if (reason === 'save') {
        const { startOfYear, endOfYear } = this.timeAppService.getStartEndDatesOfYear(this.holidaysForm.value.year);
        this.holidayService
          .apiHolidayUpdateHolidaysPut({
            from: startOfYear,
            to: endOfYear,
            body: this.holidaysData
          })
          .subscribe(result => {
            if (result === false) {
              alert('eror');
            } else {
              this.snackBarAppService.showSaved();
              this.loadHolidays();
            }
          });
      }
    });
  }

  public onYearChange(event) {
    this.loadHolidays();
  }

  public cancel() {
    this.router.navigate(['/dashboard']);
  }
}
