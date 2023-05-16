export class User {
  public id?: number;
  public email?: string;
  public password?: string;
  public firstName?: string;
  public lastName?: string;
  public meta?: IUserMeta | string;
  public roles?: string[];
  public token?: string;
  public time?: string;
  public position?: string;
  public projectIds?: number[];
  public positionIds?: number[];
  public skillIds?: number[];
  public userId?: number;
}

export interface IUserMeta {
  email?: string;
  phone?: string;
  birthDate?: string;
}
