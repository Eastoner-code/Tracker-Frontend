import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserRateApiModel } from '../../../../api/models';
import { SalaryService } from '../../../../api/services';
import { SnackBarAppService } from '../../../../app/shared/services/snack-bar.app.service';
import { ConfirmDialogComponent } from '../..//../shared/_helpers/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-salary',
  templateUrl: './user-salary.component.html',
  styleUrls: ['./user-salary.component.scss']
})
export class UserSalaryComponent implements OnInit, OnDestroy {
  public constructor(
    private router: Router,
    private route: ActivatedRoute,
    private salaryService: SalaryService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackBarAppService: SnackBarAppService
  ) {}

  private userId: number;
  private routeSub: Subscription;

  public isEdit: boolean = false;

  public editId: number;

  public userName: string;

  public userRates: UserRateApiModel[] = [];

  public rateForm: FormGroup = this.fb.group({
    date: [null, Validators.required],
    rate: [0, Validators.required]
  });

  private loadRates() {
    this.salaryService
      .apiSalaryGetRatesByUserIdUserIdGet({
        userId: this.userId
      })
      .pipe(
        map(x =>
          x.map(r => ({
            ...r,
            date: new Date(r.date).toLocaleDateString()
          }))
        )
      )
      .subscribe(data => {
        this.userRates = data;
      });
  }

  public ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.userId = params.id;
      this.userName = params['user-name'];
      this.loadRates();
    });
  }

  public save() {
    if (this.rateForm.valid) {
      const date = moment(this.rateForm.value.date).format('YYYY-MM-DD');

      if (this.isEdit) {
        this.isEdit = false;
        this.salaryService
          .apiSalaryUpdateRatePut({
            body: {
              date,
              userId: this.userId,
              rate: this.rateForm.value.rate,
              id: this.editId
            }
          })
          .subscribe(result => {
            this.loadRates();
            this.snackBarAppService.showSaved();
          });
      } else {
        this.salaryService
          .apiSalaryAddRatePost({
            body: {
              date,
              userId: this.userId,
              rate: this.rateForm.value.rate
            }
          })
          .subscribe(result => {
            this.loadRates();
            this.snackBarAppService.showSaved();
          });
      }
    }
  }

  public cancel() {
    this.router.navigate(['/users']);
  }

  public edit(data: UserRateApiModel) {
    this.isEdit = true;
    this.editId = data.id;
    this.rateForm.reset({
      date: new Date(data.date),
      rate: data.rate
    });
  }

  public delete(data: UserRateApiModel) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: {
        title: 'Confirm',
        message: 'Do you want to remove this rate?'
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.salaryService.apiSalaryDeleteRateIdDelete({ id: data.id }).subscribe(result => {
          this.loadRates();
          this.snackBarAppService.showRemoved();
        });
      }
    });
  }

  public ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
