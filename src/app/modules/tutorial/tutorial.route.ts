import express from 'express';
import { tutorialController } from './tutorial.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  tutorialController.deleteTutorialById,
);
router.post('/', auth(USER_ROLE.admin), tutorialController?.createTutorial);
router.get(
  '/',
  auth(USER_ROLE.user, USER_ROLE.admin),
  tutorialController.getAllTutorial,
);

export const tutotialRoutes = router;
