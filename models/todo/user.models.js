import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: [true, 'email already in use'],
      required: true,
      lowercase: true,
    },
    password: {
      String: true,
    },
  },
  { timestaps: true }
);

export const User = mongoose.model('User', userSchema);