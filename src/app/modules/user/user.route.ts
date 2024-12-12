import express from 'express';
import { userController } from './user.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';

const router = express.Router();
router.put(
  '/changeRole/:id',
  auth(USER_ROLE.admin),
  userController.changeUserRole,
);
router.delete('/:id', userController.deleteSingleUserById);
router.get('/', auth(USER_ROLE.admin), userController.getAllUsers);

export const userRoutes = router;
