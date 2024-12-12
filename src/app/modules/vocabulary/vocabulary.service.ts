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
    // lessonNo: payload?.lessonNo,
    lessonId: selectedLesson._id, // Reference Lesson _id
  });

  return await vocabulary.save();
};

const updateVocabularyFromDB = async (
  vocabularyId: string,
  vocabularyData: any,
) => {
  let updatedVocabularyData = { ...vocabularyData };
  console.log(vocabularyData);

  // If the lessonNo is included in the vocabularyData, update the lessonId reference
  if (vocabularyData.lessonNo) {
    // Find the lesson by the provided lessonNo
    const selectedLesson = await Lesson.findOne({
      lessonNo: vocabularyData.lessonNo,
    });

    // if (!selectedLesson) {
    //   throw new AppError(
    //     httpStatus.NOT_FOUND,
    //     "Lesson not found with the provided lessonNo"
    //   );
    // }

    if (selectedLesson) {
      // Update the lessonId in the vocabularyData
      updatedVocabularyData.lessonId = selectedLesson._id;
    }
  }

  // Update the vocabulary document in the database with the updated data
  return await Vocabulary.findByIdAndUpdate(
    vocabularyId,
    updatedVocabularyData,
    {
      new: true, // To return the updated document
    },
  );
};

const getAllVocabularysFromDB = async () => {
  const vocabularies = await Vocabulary.find().populate('lessonId');
  // console.log('vocabulary:', vocabularies);
  return vocabularies;
};

// const updateVocabularyFromDB = async (
//   vocabularyId: string,
//   vocabularyData: any,
// ) => {
//   return await Vocabulary.findByIdAndUpdate(vocabularyId, vocabularyData, {
//     new: true,
//   });
// };

const deleteVocabularyFromDB = async (vocabularyId: string) => {
  return await Vocabulary.findByIdAndDelete(vocabularyId);
};
const getSingleVocabularyFromDB = async (vocabularyId: string) => {
  return await Vocabulary.findById({ _id: vocabularyId }).populate('lessonId');
};

export const vocabularySerice = {
  getAllVocabularysFromDB,
  updateVocabularyFromDB,
  deleteVocabularyFromDB,
  createVocabularyIntoDB,
  getSingleVocabularyFromDB,
};
