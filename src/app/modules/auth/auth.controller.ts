import { NextFunction, Request, Response } from 'express';
import { authService } from './auth.service';
import { CustomRequest } from '../../interface/CustomRequest';
import { TUserJwtPayload } from './auth.interface';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await authService.registerUserIntoDB(req.body);
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'User Registered successfully ',
      token: result.accessToken,
      data: result.user,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
    // next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await authService.loginUser(req.body);
    // send response to client
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User logged in successfully',
      token: result.accessToken,
      data: result.user,
    });
  } catch (error: any) {
    // res.status(400).json({ success: false, message: error.message });
    next(error);
  }
};

const getMyProfile = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req?.user as any;

    const result = await authService.getMyProfileFormDb(user);

    // send response to client
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User profile retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const authController = {
  createUser,
  login,
  getMyProfile,
};
