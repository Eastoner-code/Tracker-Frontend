import { NotificationsRoutingModule } from './notification-routing.module';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotificationComponent } from './notification.component';
import { NgModule } from '@angular/core';
import { NotificationListModule } from './notification-list/notification-list.module';
import { NotificationListRoutingModule } from './notification-list/notification-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    NotificationsRoutingModule,
    NotificationListRoutingModule,
    NotificationListModule
  ],
  exports: [],
  declarations: [NotificationComponent]
})
export class NotificationModule {}
