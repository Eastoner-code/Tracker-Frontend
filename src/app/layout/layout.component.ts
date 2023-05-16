import { Component } from '@angular/core';

import { User } from '../shared/_models/user';
import { AuthorizationAppService } from '../shared/services/authorization.app.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public constructor(private authorizationAppService: AuthorizationAppService) {
    this.currentUser = this.authorizationAppService.currentUserValue;
  }

  public currentUser: User;
  public collapedSideBar: boolean;

  public receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
}
