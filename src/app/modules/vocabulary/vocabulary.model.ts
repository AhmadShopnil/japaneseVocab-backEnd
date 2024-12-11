import { Schema, model } from 'mongoose';
import { TVocabulary } from './vocabulary.interface';

const vocabularySchema = new Schema<TVocabulary>({
  word: { type: String, required: true },
  pronunciation: { type: String, required: true },
  whenToSay: { type: String, required: true },
  lessonNo: { type: Number }, // Reference to Lesson model
  lessonId: { type: Schema.Types.ObjectId, ref: 'Lesson', required: true }, // Reference to Lesson model
  adminEmail: { type: String, required: true },
});

export const Vocabulary = model<TVocabulary>('Vocabulary', vocabularySchema);
