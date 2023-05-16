/* tslint:disable */
import { ActivityCustomerReportApiModal } from './activity-customer-report-api-modal';
import { TimeCustomerReportApiModal } from './time-customer-report-api-modal';
import { UserCustomerReportApiModal } from './user-customer-report-api-modal';
export interface GeneralCustomerReportApiModal {
  activities?: null | Array<ActivityCustomerReportApiModal>;
  projectName?: null | string;
  totalTime?: TimeCustomerReportApiModal;
  userReports?: null | Array<UserCustomerReportApiModal>;
}
