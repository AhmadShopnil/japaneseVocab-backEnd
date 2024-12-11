import express from 'express';
import { lessonController } from './lesson.controller';

const router = express.Router();

router.put('/:id', lessonController.updateLesson);
router.delete('/:id', lessonController.deleteLesson);
router.post('/', lessonController.createLesson);
router.get('/:id', lessonController.getAllLessons);
router.get('/', lessonController.getAllLessons);

export const lessonRoutes = router;
