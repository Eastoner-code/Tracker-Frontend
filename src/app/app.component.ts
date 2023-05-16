import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoleModel } from './shared/_models/roleModel';
import { User } from './shared/_models/user';
import { AuthorizationAppService } from './shared/services/authorization.app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public get isAdmin() {
    return this.currentUser && this.currentUser.roles.includes(RoleModel.admin);
  }

  public constructor(private router: Router, private authorizationAppService: AuthorizationAppService) {
    this.authorizationAppService.currentUser.subscribe(x => (this.currentUser = x));
  }

  public currentUser: User;

  public logout() {
    this.authorizationAppService.logout();
    this.router.navigate(['/login']);
  }

  public ngOnInit() {
    if (JSON.parse(localStorage.getItem('currentUser'))) {
      this.authorizationAppService.refreshLogin().subscribe();
    }
  }
}
