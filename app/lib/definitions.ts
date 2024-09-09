import { Document } from 'mongoose';

export interface UserDocument extends Document {
  id: string;
  googleID: string;
  email: string;
  firstName: string;
  lastName: string;
  fullname: string;
  image: string;
}

export interface MessageDocument extends Document {
  id: string;
  user: UserDocument;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}