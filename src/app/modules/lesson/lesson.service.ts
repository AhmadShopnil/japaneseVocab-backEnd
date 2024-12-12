import AppError from '../../errors/AppError';
import { Vocabulary } from '../vocabulary/vocabulary.model';
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
  return await Lesson.findById(lessonId);
};

export const lessonServices = {
  getAllLessonsFromDB,
  updateLessonFromDB,
  deleteLessonFromDB,
  createLessonIntoDB,
  getSingleLessonFromDB,
};
