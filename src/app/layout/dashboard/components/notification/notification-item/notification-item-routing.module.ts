import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotificationItemComponent } from './notification-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NotificationItemComponent],
  declarations: [NotificationItemComponent]
})
export class NotificationItemRoutingModule {}
