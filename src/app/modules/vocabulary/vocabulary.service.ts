import { Vocabulary } from './vocabulary.model';

const createVocabularyIntoDB = async (vocabularyData: any) => {
  const vocabulary = new Vocabulary(vocabularyData);
  return await vocabulary.save();
};

const getAllVocabularysFromDB = async () => {
  return await Vocabulary.find();
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
