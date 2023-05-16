import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';

import { AuthorizationAppService as AuthService } from '../services/authorization.app.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad, CanActivate {
  public constructor(private router: Router, private auth: AuthService) {}

  public isAuthenticated() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/authorization/login/']);
      return false;
    } else {
      return true;
    }
  }

  public canActivate() {
    return this.isAuthenticated();
  }

  public canLoad() {
    return this.isAuthenticated();
  }
}
