import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.put('/changeRole/:id', userController.changeUserRole);
router.delete('/:id', userController.deleteSingleUserById);
// router.get(
//   '/me',
//   auth(USER_ROLE.user, USER_ROLE.admin),
//   userController.getMyProfile,
// );

router.get('/', userController.getAllUsers);

export const userRoutes = router;
