import { Document } from 'mongoose';

export interface UserDocument extends Document {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  fullname: string;
}

export interface MessageDocument extends Document {
  id: string;
  user: UserDocument;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}