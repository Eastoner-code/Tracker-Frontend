import { Directive, ElementRef } from '@angular/core';

import { RoleModel } from '../_models/roleModel';
import { User } from '../_models/user';

@Directive({
  selector: '[isAdmin]'
})
export class IsAdminDirective {
  public constructor(el: ElementRef) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isAdmin ? (el.nativeElement.style.display = 'block') : (el.nativeElement.style.display = 'none');
  }

  public get isAdmin() {
    return this.currentUser && this.currentUser.roles.includes(RoleModel.admin);
  }

  public currentUser: User;
}
