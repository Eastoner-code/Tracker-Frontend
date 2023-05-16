import { Component, OnInit, Input } from '@angular/core';
import { Notification } from 'src/app/shared/_models/notification';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  
  @Input() public notifications: Notification[] = [];
  //@Input() public size = 10;
  //@Input() public page = 1;
  //@Input() public count = 100;

  public page = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0
  };


  public constructor() {
    console.log("Hited ntl constructor");
   }

  ngOnInit(): void {
    console.log("ntl Notifications: ", this.notifications);
  }
}
