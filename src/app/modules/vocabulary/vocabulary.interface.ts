import { Types } from 'mongoose';

export interface TVocabulary {
  word: string;
  pronunciation: string;
  whenToSay: string;
  lessonNo: number;
  lessonId?: Types.ObjectId;
  adminEmail: string;
}
