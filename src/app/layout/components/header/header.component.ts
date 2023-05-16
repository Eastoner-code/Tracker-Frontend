import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AuthorizationAppService } from '../../../shared/services/authorization.app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public constructor(public router: Router, private authorizationAppService: AuthorizationAppService) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
    this.authorizationAppService.currentUserSubject.subscribe(user => {
      this.user = user;
    });
  }

  public user: any = {};
  public pushRightClass: string;
  @Input()
  public collapsed = false;

  public ngOnInit() {
    this.pushRightClass = 'push-right';
  }

  public isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  public toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  public rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  public onLoggedOut() {
    this.authorizationAppService.logout();
    this.router.navigate(['/login']);
  }
}
