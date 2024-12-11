import { Request } from 'express';
import { TUserInput } from '../modules/user/user.interface';

export interface CustomRequest extends Request {
  user?: TUserInput;
}
