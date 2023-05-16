import { Directive, ElementRef } from '@angular/core';

import { RoleModel } from '../_models/roleModel';
import { User } from '../_models/user';

@Directive({
  selector: '[isRecruiter]'
})
export class IsRecruiterDirective {
  public constructor(el: ElementRef) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isRecruiter ? (el.nativeElement.style.display = 'block') : (el.nativeElement.style.display = 'none');
  }

  public get isRecruiter() {
    return this.currentUser && this.currentUser.roles.includes(RoleModel.recruiter);
  }

  public currentUser: User;
}
