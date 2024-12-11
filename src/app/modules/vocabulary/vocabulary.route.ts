import express from 'express';
import { vocabularyController } from './vocabulary.controller';

const router = express.Router();

router.put('/:id', vocabularyController.updateVocabulary);
router.delete('/:id', vocabularyController.deleteVocabulary);
router.post('/', vocabularyController.createVocabulary);
router.get('/:id', vocabularyController.getSingleVocabulary);
router.get('/', vocabularyController.getAllVocabulary);

export const vocabularyRoutes = router;
