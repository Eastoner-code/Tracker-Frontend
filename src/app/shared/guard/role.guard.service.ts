import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { RoleModel } from '../_models/roleModel';
import { User } from '../_models/user';
import { AuthorizationAppService as AuthService } from '../services/authorization.app.service';

@Injectable({ providedIn: 'root' })
export class RoleGuardService implements CanLoad {
  public constructor(public auth: AuthService, public router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  public currentUser: User;

  public get isAdmin() {
    return this.currentUser && this.currentUser.roles.includes(RoleModel.admin);
  }

  public get isSuperAdmin() {
    return this.currentUser && this.currentUser.roles.includes(RoleModel.superAdmin);
  }

  public get isRecruiter() {
    return this.currentUser && this.currentUser.roles.includes(RoleModel.recruiter);
  }

  public canLoad(): boolean {
    if (!this.isSuperAdmin && !this.isAdmin) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
