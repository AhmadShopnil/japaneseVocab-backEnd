import { Document } from 'mongoose';

export interface TLesson extends Document {
  name: string;
  lessonNo: number;
  // description: string;
  // content: string;
}
