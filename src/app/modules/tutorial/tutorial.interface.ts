import { Types } from 'mongoose';

export interface TTutorial {
  title: string;
  videoId: string;
  otherResource?: string;
}
