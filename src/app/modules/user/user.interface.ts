import { Model, Types } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface TUserInput {
  name: string;
  email: string;
  password: string;
  role?: 'user' | 'admin';
  profileImage?: string;
}

export interface TUserResponse {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  profileImage?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type TUserRole = keyof typeof USER_ROLE;

export interface TUserModel extends Model<TUserInput> {
  isUserExitsByEmail(email: string): Promise<TUserResponse>;

  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
