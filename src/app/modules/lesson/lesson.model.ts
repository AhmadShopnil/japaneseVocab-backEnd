import { model, Schema } from 'mongoose';

import { TLesson } from './lesson.interface';

const lessonSchema = new Schema<TLesson>({
  name: { type: String, required: true },
  lessonNo: { type: Number, required: true },
  // description: { type: String, required: true },
  // content: { type: String, required: true },
});

export const Lesson = model<TLesson>('Lesson', lessonSchema);
