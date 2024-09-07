import { Document } from 'mongoose';

export interface UserDocument extends Document {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface MessageDocument extends Document {
  _id: string;
  user: UserDocument;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}