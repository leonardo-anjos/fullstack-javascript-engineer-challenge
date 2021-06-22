import { IUserType, UserTypeDto } from "./user-type.interfaces";

export interface IUser {
  id?: string;
  nickname: string;
  name: string;
  phone: string;
  email: string;
  user_type: IUserType;
  active: boolean;
  updatedAt?: Date;
  createdAt?: Date;
}

export interface UserDto {
  nickname: string;
  name: string;
  phone: string;
  email: string;
  user_type: UserTypeDto;
  active: boolean;
}
