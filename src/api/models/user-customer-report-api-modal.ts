/* tslint:disable */
import { TimeCustomerReportApiModal } from './time-customer-report-api-modal';
import { TimeCustomerReportForPeriodApiModal } from './time-customer-report-for-period-api-modal';
export interface UserCustomerReportApiModal {
  firstName?: null | string;
  lastName?: null | string;
  reportForWeeks?: null | Array<TimeCustomerReportForPeriodApiModal>;
  totalTime?: TimeCustomerReportApiModal;
  userId?: number;
}
