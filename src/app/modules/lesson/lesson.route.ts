import express from 'express';
import { lessonController } from './lesson.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.put('/:id', auth(USER_ROLE.admin), lessonController.updateLesson);
router.delete('/:id', auth(USER_ROLE.admin), lessonController.deleteLesson);
router.post('/', auth(USER_ROLE.admin), lessonController.createLesson);
router.get(
  '/:id',
  auth(USER_ROLE.user, USER_ROLE.admin),
  lessonController.getSingleLesson,
);
router.get(
  '/',
  auth(USER_ROLE.user, USER_ROLE.admin),
  lessonController.getAllLessons,
);

export const lessonRoutes = router;
