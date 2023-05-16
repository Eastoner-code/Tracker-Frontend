import { NotificationService } from './../../../../../api/services/notification.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{
  public notifications = [];
  public pipe = new DatePipe('en-US');
  public page = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0
  };

  public constructor(private notificationService: NotificationService){}
  
  ngOnInit(): void {
    this.InitNotifications();
  }

  private InitNotifications(pageNumber = 1){
    this.notificationService.apiNotificationUserNotificationsPost({body:{pageSize: this.page.itemsPerPage, page: pageNumber }})
    .subscribe(res => {
        this.notifications = res.results;
        this.page = {
          itemsPerPage: res.pageSize,
          currentPage: res.currentPage,
          totalItems: res.rowCount
        };
      }, error => {
        console.log(error);
      }
    );
  }

  public onDelete(notificationId:number){
    this.notificationService.apiNotificationDeleteDelete({ id: notificationId }).subscribe(() => {
      this.InitNotifications(this.page.currentPage);
    });
  }

  public markAsRead(notificationId:number, isRead:boolean){
    if(!isRead){
      this.notificationService.apiNotificationMarkAsReadPut({ notificationId }).subscribe(()=>{
        this.InitNotifications(this.page.currentPage);
      });
    }
  }

  public pageChanged(pageNumber){
    this.InitNotifications(pageNumber);
  }
}
