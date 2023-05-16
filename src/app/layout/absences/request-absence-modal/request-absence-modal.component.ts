import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { AbsenceApiModel } from '../../../../api/models/absence-api-model';
import { AbsenceService } from '../../../../api/services/absence.service';
import { AbsencesComponent } from '../absences.component';

@Component({
  selector: 'app-request-absence-modal',
  templateUrl: './request-absence-modal.component.html',
  styleUrls: ['./request-absence-modal.component.scss']
})
export class RequestAbsenceModalComponent implements OnInit {
  public get isOneDay() {
    const startDate = this.requestAbsenceOptions.value.StartDate;
    const endDate = this.requestAbsenceOptions.value.EndDate;
    return startDate && endDate && !(startDate - endDate);
  }

  public constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<AbsencesComponent>,
    private absenceService: AbsenceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.requestAbsenceOptions = fb.group({
      IsFullDay: this.fullDayControl,
      StartDate: this.startDateControl,
      EndDate: this.endtDateControl,
      Type: this.typeAbsenceControl,
      Description: this.descControl
    });
  }

  public requestAbsenceOptions: FormGroup;
  public fullDayControl = new FormControl('true', Validators.required);
  public descControl = new FormControl('');
  public typeAbsenceControl = new FormControl('', Validators.required);
  public startDateControl = new FormControl('', Validators.required);
  public endtDateControl = new FormControl('', Validators.required);

  public isReadOnly: boolean = false;
  public isApproveView: boolean = false;

  public onCancelClick(): void {
    this.dialogRef.close('close');
  }

  public onSubmit() {
    if (!this.isApproveView) {
      const data = this.requestAbsenceOptions.value;
      data.StartDateLocal = new Date(data.StartDate).toDateString();
      data.EndDateLocal = new Date(data.EndDate).toDateString();

      this.absenceService
        .apiAbsenceRequestAbsencePost({
          body: this.requestAbsenceOptions.value
        })
        .subscribe(result => {
          if (result.success) {
            this.dialogRef.close('save');
          } else {
            this.dialogRef.close('error');
          }
        });
    }
  }

  public ngOnInit(): void {
    if (this.data && this.data.request) {
      this.isReadOnly = true;
      const request = this.data.request;
      this.requestAbsenceOptions.reset({
        StartDate: new Date(request.startDate),
        EndDate: new Date(request.endDate),
        Description: request.description,
        IsFullDay: request.isFullDay.toString(),
        Type: request.type.toString()
      });
    }

    if (this.data && this.data.isApproveView === true) {
      this.isApproveView = this.data.isApproveView;
    }
  }

  public onReject() {
    const id = this.data.request.id;
    const status = 3;
    this.absenceService
      .apiAbsenceUpdateRequestStatusIdStatusPut({
        id,
        status
      })
      .subscribe(result => {
        if (result.success) {
          this.dialogRef.close('rejected');
        } else {
          this.dialogRef.close('error');
        }
      });
  }

  public onApprove() {
    const id = this.data.request.id;
    const status = 2;
    this.absenceService
      .apiAbsenceUpdateRequestStatusIdStatusPut({
        id,
        status
      })
      .subscribe(result => {
        if (result.success) {
          this.dialogRef.close('approved');
        } else {
          this.dialogRef.close('error');
        }
      });
  }
}
