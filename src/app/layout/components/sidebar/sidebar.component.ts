import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { UserService } from '../../../../api/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public constructor(public router: Router) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  public isActive: boolean;
  public collapsed: boolean;
  public showMenu: string;
  public pushRightClass: string;
  @Output() public collapsedEvent = new EventEmitter<boolean>();

  public ngOnInit() {
    this.isActive = false;
    this.collapsed = false;
    this.showMenu = '';
    this.pushRightClass = 'push-right';
  }

  public eventCalled() {
    this.isActive = !this.isActive;
  }

  public addExpandClass(element: any) {
    this.showMenu = element === this.showMenu ? '0' : element;
  }

  public toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
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

  public navigateToProfile() {
    this.router.navigate(['/users']);
  }

  public onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }
}
