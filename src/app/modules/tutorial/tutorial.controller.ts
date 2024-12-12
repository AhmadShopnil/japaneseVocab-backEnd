import { tutorialService } from './tutorial.service';
import { Request, Response } from 'express';

const createTutorial = async (req: Request, res: Response) => {
  try {
    // console.log('from tutorial', req.body);

    const result = await tutorialService.createTutorialIntoDB(req.body);
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Tutorial created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getAllTutorial = async (req: Request, res: Response) => {
  try {
    const result = await tutorialService.getAllTutorialsFromDB();
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Tutorial get successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteTutorialById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await tutorialService.deleteTutorialFromDB(id);
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Tutorial deleted successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const tutorialController = {
  getAllTutorial,
  createTutorial,
  deleteTutorialById,
};
