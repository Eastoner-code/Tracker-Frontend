/* tslint:disable */
import { CandidateStatus } from './candidate-status';
export interface CandidateApiModel {
  description?: null | string;
  firstName?: null | string;
  id?: number;
  interviewDate?: string;
  lastName?: null | string;
  status?: CandidateStatus;
  vacancyId?: number;
}
