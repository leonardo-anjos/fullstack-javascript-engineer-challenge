export interface IUserType {
  id?: string;
  description: string;
  active: boolean;
  updatedAt?: Date;
  createdAt?: Date;
}

export interface UserTypeDto {
  description: string;
  active: boolean;
}
