import { Request, Response } from 'express';
import { lessonServices } from './lesson.service';

const createLesson = async (req: Request, res: Response) => {
  try {
    const result = await lessonServices.createLessonIntoDB(req.body);
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Lesson created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getAllLessons = async (req: Request, res: Response) => {
  try {
    const result = await lessonServices.getAllLessonsFromDB();
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Get all Lesson  successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateLesson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await lessonServices.updateLessonFromDB(id, req.body);
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Update Lesson  successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteLesson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await lessonServices.deleteLessonFromDB(id);
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Lesson deleted successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getSingleLesson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await lessonServices.getSingleLessonFromDB(id);
    // send response to client
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Lesson get successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const lessonController = {
  getAllLessons,
  updateLesson,
  deleteLesson,
  createLesson,
  getSingleLesson,
};
