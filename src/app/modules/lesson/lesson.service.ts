import { Lesson } from './lesson.model';

const createLessonIntoDB = async (lessonData: any) => {
  const lesson = new Lesson(lessonData);
  return await lesson.save();
};

const getAllLessonsFromDB = async () => {
  return await Lesson.find();
};

const updateLessonFromDB = async (lessonId: string, lessonData: any) => {
  return await Lesson.findByIdAndUpdate(lessonId, lessonData, { new: true });
};

const deleteLessonFromDB = async (lessonId: string) => {
  return await Lesson.findByIdAndDelete(lessonId);
};

export const lessonSerices = {
  getAllLessonsFromDB,
  updateLessonFromDB,
  deleteLessonFromDB,
  createLessonIntoDB,
};
