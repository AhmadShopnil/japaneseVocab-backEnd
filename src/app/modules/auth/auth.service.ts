import httpStatus from 'http-status';

import { TUserInput } from '../user/user.interface';
import { User } from '../user/user.model';
import AppError from '../../errors/AppError';
import { createToken } from '../../utils/jwtUtils';
import config from '../../config';
import { TUserJwtPayload } from './auth.interface';

export const registerUserIntoDB = async (userData: TUserInput) => {
  const user = await User.isUserExitsByEmail(userData?.email);
  if (user) {
    throw new AppError(httpStatus.CONFLICT, 'This user already Registered');
  }

  const createdUser = await User.create(userData);

  const userWithoutPassword = {
    _id: createdUser._id,
    email: createdUser.email,
    name: createdUser.name,
    role: createdUser.role,
  };

  const jwtPayload = {
    userId: createdUser._id,
    role: createdUser.role,
    email: createdUser.email,
  };

  const accessToken = createToken(
    jwtPayload as TUserJwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  //

  return {
    accessToken,
    user: userWithoutPassword,
  };
};

const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  //   console.log('from auth service', { email, password });

  const user = await User.isUserExitsByEmail(email);
  if (!user) throw new Error('Invalid credentials');

  //   console.log('from auth service user:', user);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user not found');
  }

  const isPasswordMatch = await User.isPasswordMatched(password, user.password);

  //   console.log('from auth service', isPasswordMatch);

  if (!isPasswordMatch) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
  }

  const jwtPayload = {
    userId: user._id,
    role: user.role,
    email: user.email,
  };

  const accessToken = createToken(
    jwtPayload as TUserJwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const userWithoutPassword = {
    _id: user._id,
    email: user.email,
    name: user.name,
    role: user.role,
  };

  return {
    accessToken,
    user: userWithoutPassword,
  };
};

export const authService = {
  registerUserIntoDB,
  loginUser,
};
