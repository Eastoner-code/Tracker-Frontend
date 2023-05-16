import { ActivityApiModel } from '../../../api/models';

export class Activity implements ActivityApiModel {
  public createdAtUtc?: string;
  public description?: null | string;
  public duration?: null | number;
  public userId?: number;
  public id?: null | number;
  public projectId?: number;
  public updatedAtUtc?: string;
  public workedFromUtc?: string | any;
  public workedToUtc?: string | any;
  public isNew: boolean;
}
