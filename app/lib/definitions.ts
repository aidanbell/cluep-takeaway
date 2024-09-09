import { Document, Types } from 'mongoose';

export interface UserDocument extends Document {
  id: string;
  googleID: string;
  email: string;
  firstName: string;
  lastName: string;
  fullname: string;
  image: string;
  messages: Types.DocumentArray<MessageDocument>;
}

export interface MessageDocument extends Document {
  message: string;
}