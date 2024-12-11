import AppError from '../../errors/AppError';
import { Lesson } from '../lesson/lesson.model';
import { Vocabulary } from './vocabulary.model';
import httpStatus from 'http-status';

const createVocabularyIntoDB = async (payload: any) => {
  const selectedLesson = await Lesson.findOne({
    lessonNo: payload?.lessonNo,
  });

  //   console.log(payload);

  if (!selectedLesson) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Lesson is not found with providev lessonNo  ',
    );
  }

  const vocabulary = new Vocabulary({
    word: payload?.word,
    pronunciation: payload?.pronunciation,
    adminEmail: payload?.adminEmail,
    whenToSay: payload?.whenToSay,
    lessonNo: payload?.lessonNo,
    lessonId: selectedLesson._id, // Reference Lesson _id
  });

  return await vocabulary.save();
};

const getAllVocabularysFromDB = async () => {
  console.log('from vocoService');
  const vocabularies = await Vocabulary.find().populate('lessonId');
  console.log('vocabulary:', vocabularies);
  return vocabularies;
};

const updateVocabularyFromDB = async (
  vocabularyId: string,
  vocabularyData: any,
) => {
  return await Vocabulary.findByIdAndUpdate(vocabularyId, vocabularyData, {
    new: true,
  });
};

const deleteVocabularyFromDB = async (vocabularyId: string) => {
  return await Vocabulary.findByIdAndDelete(vocabularyId);
};
const getSingleVocabularyFromDB = async (vocabularyId: string) => {
  return await Vocabulary.findById({ _id: vocabularyId });
};

export const vocabularySerice = {
  getAllVocabularysFromDB,
  updateVocabularyFromDB,
  deleteVocabularyFromDB,
  createVocabularyIntoDB,
  getSingleVocabularyFromDB,
};
