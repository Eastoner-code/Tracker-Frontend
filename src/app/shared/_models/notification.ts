import {NotificationApiModel } from '../../../api/models';

export class Notification implements NotificationApiModel{
  id?: number;
  caption?: null | string;
  description?: null | string;
  isRead?: boolean;
  userId?: number;
}
