import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { UserApiModel, UserYearRangeApiModel, UserYearRangeFullApiModel } from '../../../api/models';
import { AbsenceService } from '../../../api/services/absence.service';
import { ConfirmDialogComponent } from '../../shared/_helpers/confirm-dialog/confirm-dialog.component';
import { RoleModel } from '../../shared/_models/roleModel';
import { AuthorizationAppService } from '../../shared/services/authorization.app.service';
import { SnackBarAppService } from '../../shared/services/snack-bar.app.service';

import { RequestAbsenceModalComponent } from './request-absence-modal/request-absence-modal.component';
// tslint:disable-next-line:no-duplicate-imports

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.scss']
})
export class AbsencesComponent implements OnInit {
  public constructor(
    public dialog: MatDialog,
    private absenceService: AbsenceService,
    private snackBarAppService: SnackBarAppService,
    private authorizationAppService: AuthorizationAppService
  ) {
    this.authorizationAppService.currentUser.subscribe(x => (this.currentUser = x));
  }

  public currentUser: UserApiModel;

  public absencesRequests;
  public myAbsences;
  public yearRange = new FormControl();
  public yearRanges: UserYearRangeApiModel[] = [];

  public daysSummary: UserYearRangeFullApiModel = {};

  public avaliableVacations: number = 0;
  public avaliableSickLeaves: number = 0;

  private loadAbsencesRequests() {
    this.absenceService
      .apiAbsenceGetMyAbsencesGet({
        yearRangeId: this.yearRange.value
      })
      .subscribe(data => {
        this.myAbsences = data.map(x => {
          return {
            ...x,
            startDate: new Date(x.startDate).toLocaleDateString(),
            endDate: new Date(x.endDate).toLocaleDateString()
          };
        });
      });
  }

  private loadAbsencesToApprove() {
    this.absenceService.apiAbsenceGetAbsencesToApproveGet().subscribe(data => {
      this.absencesRequests = data.map(x => {
        return {
          ...x,
          startDate: new Date(x.startDate).toLocaleDateString(),
          endDate: new Date(x.endDate).toLocaleDateString()
        };
      });
    });
  }

  private loadDaysSummary() {
    this.absenceService
      .apiAbsenceGetDaysSummaryRangeIdGet({
        rangeId: this.yearRange.value
      })
      .subscribe(data => {
        this.daysSummary = data;
      });
  }

  private getCurrentRangeId(): any {
    return this.yearRanges[this.yearRanges.length - 1].id;
  }

  public isCurrentRange(): boolean {
    return this.yearRanges && this.yearRanges.length > 0 ? this.yearRange.value === this.getCurrentRangeId() : false;
  }

  public ngOnInit(): void {
    this.absenceService.apiAbsenceGetMyRangesGet().subscribe(data => {
      if (data?.length) {
        this.yearRanges = data;
        this.yearRange.setValue(this.getCurrentRangeId());
        this.loadDaysSummary();
        this.loadAbsencesToApprove();
        this.loadAbsencesRequests();
      }
    });
  }

  public chosenYearHandler() {
    const ctrlValue = this.yearRange.value;
    this.yearRange.setValue(ctrlValue);
    this.loadDaysSummary();
    this.loadAbsencesRequests();
  }

  public openDialog() {
    const dialogRef = this.dialog.open(RequestAbsenceModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'save') {
        this.snackBarAppService.showSaved();
        this.loadAbsencesRequests();
        this.loadDaysSummary();
      } else if (result === 'error') {
        this.snackBarAppService.showWithText('Error happened.');
      }
    });
  }

  public viewMyRequest(request) {
    const dialogRef = this.dialog.open(RequestAbsenceModalComponent, {
      data: {
        request
      }
    });

    dialogRef.afterClosed().subscribe(() => true);
  }

  public openForApprove(request) {
    const dialogRef = this.dialog.open(RequestAbsenceModalComponent, {
      data: {
        request,
        isApproveView: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'approved') {
        this.snackBarAppService.showWithText('Approved');
      } else if (result === 'rejected') {
        this.snackBarAppService.showWithText('Rejected');
      } else if (result === 'error') {
        this.snackBarAppService.showWithText('Error happend.');
      }
      this.loadAbsencesToApprove();
    });
  }

  public removeRequest(request) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: {
        title: 'Confirm',
        message: 'Do you want to remove this request?'
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.absenceService.apiAbsenceDeleteIdDelete({ id: request.id }).subscribe(() => {
          this.loadAbsencesRequests();
          this.loadDaysSummary();
          this.snackBarAppService.showRemoved();
        });
      }
    });
  }

  public isAbsenceApprover(): boolean {
    const role = this.currentUser.roles.find(
      x => x === RoleModel.superAdmin || x === RoleModel.admin || x === RoleModel.absenceApprover
    );
    return role ? true : false;
  }
}
