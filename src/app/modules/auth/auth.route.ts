import express from 'express';
import { authController } from './auth.controller';

const router = express.Router();

router.post(
  '/signup',

  authController.createUser,
);
router.post('/login', authController.login);

//   '/me',
//   auth(USER_ROLE.user, USER_ROLE.admin),
//   userController.getMyProfile,
// );

export const authRoutes = router;
