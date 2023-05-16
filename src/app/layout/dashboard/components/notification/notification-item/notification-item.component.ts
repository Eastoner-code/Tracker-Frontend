import { Component, Input, OnInit } from '@angular/core';
import { Notification } from 'src/app/shared/_models/notification';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss']
})
export class NotificationItemComponent implements OnInit {

  @Input() public notification: Notification;

  constructor() {
    console.log("Hited nti constructor");
    console.log("Item: " + this.notification);
    console.log("Item cap: " + JSON.stringify(this.notification));
   }

  ngOnInit(): void {
    this.notification.isRead = true;
    console.log("Item: " + this.notification);
    console.log("Item thing: " + JSON.stringify(this.notification));
  }

}
