import { model, Schema } from 'mongoose';
import { TTutorial } from './tutorial.interface';

const tutotialSchema = new Schema<TTutorial>({
  title: { type: String, required: true },
  videoId: { type: String, required: true },
  otherResource: { type: String },

  // description: { type: String, required: true },
  // content: { type: String, required: true },
});

export const Tutorial = model<TTutorial>('Tutorial', tutotialSchema);
