import express from 'express';
import { tutorialController } from './tutorial.controller';

const router = express.Router();

router.delete('/:id', tutorialController.deleteTutorialById);
router.post('/', tutorialController?.createTutorial);
router.get('/', tutorialController.getAllTutorial);

export const tutotialRoutes = router;
