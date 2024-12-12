import AppError from '../../errors/AppError';
import { User } from './user.model';
import httpStatus from 'http-status';

const getALUsersFromDB = async () => {
  const result = await User.find().select('-password');

  // console.log('from user service', result);

  if (result?.length === 0) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Not Found any user from database',
    );
  }

  return result;
};

const getSingleUserByIdFromDB = async (userId: string) => {
  return await User.findById(userId);
};

const changeUserRoleIntoDB = async (userId: string, role: string) => {
  return await User.findByIdAndUpdate(userId, { role }, { new: true });
};

const deleteSignleByIdFormDB = async ({ id }: { id: string }) => {
  // checking for is user exist or not and send response
  const isExistUser = await User.findById({ _id: id });
  if (!isExistUser) {
    //   throw new AppError(httpStatus.NOT_FOUND, 'User Not found to delete');
  }

  // deleting user form database
  const deleteUser = await User.findByIdAndDelete({ _id: id });

  if (!deleteUser) {
    //   throw new AppError(httpStatus.NOT_MODIFIED, 'User delete faild');
  }

  return isExistUser;
  //End
};

export const userService = {
  getALUsersFromDB,
  getSingleUserByIdFromDB,
  changeUserRoleIntoDB,
  deleteSignleByIdFormDB,
};
