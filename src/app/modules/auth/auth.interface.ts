import { Types } from 'mongoose';
import { TUserResponse } from '../user/user.interface';

export type TUserLoginPayload = {
  email: string;
  password: string;
};

export type TUserJwtPayload = {
  userId: Types.ObjectId;
  role: string;
  email: string;
};

export type TUserLoginResponse = {
  accessToken: string;
  user: Partial<TUserResponse>;
};
