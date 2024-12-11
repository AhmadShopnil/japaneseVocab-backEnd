import { Document, Types } from 'mongoose';

export interface TLesson extends Document {
  _id?: Types.ObjectId;
  name: string;
  lessonNo: number;
  // description: string;
  // content: string;
}
