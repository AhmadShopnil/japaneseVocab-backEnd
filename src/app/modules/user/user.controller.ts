import { Request, Response } from 'express';
import { userService } from './user.service';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getALUsersFromDB();
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Get All Users  successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getSingleUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const result = await userService.getSingleUserByIdFromDB(userId);
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'User Data Update successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};
const changeUserRole = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    console.log(id);
    console.log(role);
    const result = await userService.changeUserRoleIntoDB(id, role);
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'User Data Update successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteSingleUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req?.params;
    const result = await userService.deleteSignleByIdFormDB({
      id,
    });

    // send response to client
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User deleted  successfully',
      data: result,
    });
  } catch (error) {}
};

export const userController = {
  getAllUsers,
  changeUserRole,
  deleteSingleUserById,
  getSingleUserById,
};
