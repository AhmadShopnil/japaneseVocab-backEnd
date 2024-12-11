import { Request, Response } from 'express';
import { lessonSerices } from './lesson.service';

const createLesson = async (req: Request, res: Response) => {
  try {
    const result = await lessonSerices.createLessonIntoDB(req.body);
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
    const result = await lessonSerices.getAllLessonsFromDB();
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
    const result = await lessonSerices.updateLessonFromDB(id, req.body);
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
    const result = await lessonSerices.deleteLessonFromDB(id);
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

export const lessonController = {
  getAllLessons,
  updateLesson,
  deleteLesson,
  createLesson,
};
