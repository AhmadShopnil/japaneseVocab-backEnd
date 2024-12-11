import { Request, Response } from 'express';
import { vocabularySerice } from './vocabulary.service';

const createVocabulary = async (req: Request, res: Response) => {
  try {
    const result = await vocabularySerice.createVocabularyIntoDB(req.body);
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Vocabulary created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getAllVocabulary = async (req: Request, res: Response) => {
  try {
    const result = await vocabularySerice.getAllVocabularysFromDB();
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Get all Vocabulary  successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateVocabulary = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await vocabularySerice.updateVocabularyFromDB(id, req.body);
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Update Vocabulary  successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteVocabulary = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await vocabularySerice.deleteVocabularyFromDB(id);
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Vocabulary deleted successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getSingleVocabulary = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await vocabularySerice.getSingleVocabularyFromDB(id);
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Vocabulary Data Get successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const vocabularyController = {
  createVocabulary,
  updateVocabulary,
  deleteVocabulary,
  getAllVocabulary,
  getSingleVocabulary,
};
