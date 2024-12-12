import mongoose from 'mongoose';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { Lesson } from './lesson.model';

const createLessonIntoDB = async (lessonData: any) => {
  const lesson = new Lesson(lessonData);
  return await lesson.save();
};

const getAllLessonsFromDB = async () => {
  const lessons = await Lesson.aggregate([
    {
      $lookup: {
        from: 'vocabularies',
        localField: '_id',
        foreignField: 'lessonId',
        as: 'vocabularies',
      },
    },
  ]);

  return lessons;
};

const updateLessonFromDB = async (lessonId: string, lessonData: any) => {
  // check is lesson exits
  const isLessonExist = await Lesson.findById(lessonId);
  if (!isLessonExist) {
    throw new AppError(404, 'Lesson not found');
  }
  // Update the Lesson
  const updatedLesson = await Lesson.findByIdAndUpdate(lessonId, lessonData, {
    new: true,
  });

  if (!updatedLesson) {
    throw new AppError(404, 'Failed to update lesson');
  }
  return updatedLesson;
};

const deleteLessonFromDB = async (lessonId: string) => {
  return await Lesson.findByIdAndDelete(lessonId);
};

const getSingleLessonFromDB = async (lessonId: string) => {
  const lesson = await Lesson.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(lessonId) },
    },
    {
      $lookup: {
        from: 'vocabularies',
        localField: '_id',
        foreignField: 'lessonId',
        as: 'vocabularies',
      },
    },
  ]);

  if (lesson.length == 0) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Not Found any lesson from database',
    );
  }

  return lesson[0];
};

export const lessonServices = {
  getAllLessonsFromDB,
  updateLessonFromDB,
  deleteLessonFromDB,
  createLessonIntoDB,
  getSingleLessonFromDB,
};
