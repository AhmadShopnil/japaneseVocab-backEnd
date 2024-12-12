import express from 'express';
import { authController } from './auth.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/signup',

  authController.createUser,
);
router.post('/login', authController.login);

router.get(
  '/me',
  auth(USER_ROLE.user, USER_ROLE.admin),
  authController.getMyProfile,
);

export const authRoutes = router;
