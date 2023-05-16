import { Directive, ElementRef } from '@angular/core';

import { RoleModel } from '../_models/roleModel';
import { User } from '../_models/user';

@Directive({
  selector: '[isSuperAdmin]'
})
export class IsSuperAdminDirective {
  public constructor(el: ElementRef) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isSuperAdmin ? (el.nativeElement.style.display = 'block') : (el.nativeElement.style.display = 'none');
  }

  public get isSuperAdmin() {
    return this.currentUser && this.currentUser.roles.includes(RoleModel.superAdmin);
  }
  public currentUser: User;
}
