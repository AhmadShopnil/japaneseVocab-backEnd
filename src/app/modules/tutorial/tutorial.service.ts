import { Tutorial } from './tutorial.model';

const createTutorialIntoDB = async (tutorialData: any) => {
  const tutorial = new Tutorial(tutorialData);
  return await tutorial.save();
};

const getAllTutorialsFromDB = async () => {
  const result = await Tutorial.find();

  return result;
};

const deleteTutorialFromDB = async (tutorialId: string) => {
  return await Tutorial.findByIdAndDelete(tutorialId);
};

export const tutorialService = {
  createTutorialIntoDB,
  getAllTutorialsFromDB,
  deleteTutorialFromDB,
};
