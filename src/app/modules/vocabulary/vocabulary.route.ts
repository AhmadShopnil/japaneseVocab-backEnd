import express from 'express';
import { vocabularyController } from './vocabulary.controller';
import { USER_ROLE } from '../user/user.constant';
import auth from '../../middlewares/auth';

const router = express.Router();

router.put(
  '/:id',
  auth(USER_ROLE.admin),
  vocabularyController.updateVocabulary,
);
router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  vocabularyController.deleteVocabulary,
);
router.post('/', auth(USER_ROLE.admin), vocabularyController.createVocabulary);
router.get(
  '/:id',
  auth(USER_ROLE.user, USER_ROLE.admin),
  vocabularyController.getSingleVocabulary,
);
router.get(
  '/',
  auth(USER_ROLE.user, USER_ROLE.admin),
  vocabularyController.getAllVocabulary,
);

export const vocabularyRoutes = router;
