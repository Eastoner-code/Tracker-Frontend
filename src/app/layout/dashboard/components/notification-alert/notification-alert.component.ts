import { NotificationService } from '../../../../../api/services/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-alert',
  templateUrl: './notification-alert.component.html',
  styleUrls: ['./notification-alert.component.scss']
})
export class NotificationAlertComponent implements OnInit{
  public notifications = [];
  public totalAmount:number;
  
  public constructor(private NotificationService: NotificationService)
  {
  }
  
  ngOnInit(): void {
      this.NotificationService.apiNotificationUserAlertNotificationsGet().subscribe(
        res => {
          this.totalAmount = res.totalAmount;
          this.notifications = res.notifications;
        },
        error => {
          console.log(error);
        }
      );
    }
}
