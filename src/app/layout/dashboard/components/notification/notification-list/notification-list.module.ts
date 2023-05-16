import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotificationListComponent } from './notification-list.component';
import { NotificationItemModule } from '../notification-item/notification-item.module';

@NgModule({
  imports: [
    CommonModule,
    NotificationItemModule
  ],
  declarations: [NotificationListComponent],
  exports: [NotificationListComponent]
})
export class NotificationListModule {}
