import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ActivityAppService {
  public disabledSubject = new BehaviorSubject<boolean>(false);
  public disabledData = this.disabledSubject.asObservable();

  public activitesSubject = new BehaviorSubject<boolean>(false);

  public disabledSubjectTrue() {
    this.disabledSubject.next(true);
  }
  public disabledSubjectFalse() {
    this.disabledSubject.next(false);
  }
  // This method provides change state of behaviour Subject "ActivitesSubject" to 'true'
  public myActivitiesOpenEdit() {
    this.activitesSubject.next(true);
  }

  // This method provides change state of behaviour Subject "ActivitesSubject" to 'false'
  public myActivitiesOpenEditFalse() {
    this.activitesSubject.next(false);
  }
}
