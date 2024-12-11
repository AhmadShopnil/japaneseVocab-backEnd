import { Schema } from 'mongoose';
import { TUserInput, TUserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import { model } from 'mongoose';

const userSchema = new Schema<TUserInput, TUserModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
  },
  {
    timestamps: true, // This adds `createdAt` and `updatedAt` fields
  },
);

userSchema.pre('save', async function (next) {
  const user = this;

  // Only hash the password if it has been modified (or if it's new)
  if (!user.isModified('password')) {
    return next(); // Skip the hashing process
  }

  try {
    // Hash the password
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds),
    );
    next();
  } catch (error: any) {
    next(error);
  }
});

// statics method
userSchema.statics = {
  isUserExitsByEmail: async function (email) {
    return await User.findOne({ email: email });
  },
  isPasswordMatched: async function (plainTextPassword, hashedPassword) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  },
};

export const User = model<TUserInput, TUserModel>('User', userSchema);
