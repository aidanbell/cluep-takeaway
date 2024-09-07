import mongoose, { Document, Model } from "mongoose";

import { UserDocument, MessageDocument } from "@/app/lib/definitions";


const userSchema = new mongoose.Schema<UserDocument>({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v: string) => {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: (props: { value: string }) => `${props.value} is not a valid email!`,
    },
  },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

userSchema.virtual("fullname").get(function (this: UserDocument) {
  return `${this.firstName} ${this.lastName}`;
});

const messageSchema = new mongoose.Schema<MessageDocument>({
  user: { type: userSchema, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

export const User: Model<UserDocument> = mongoose.models?.User || mongoose.model("User", userSchema);
export const Message: Model<MessageDocument> = mongoose.models?.Message || mongoose.model("Message", messageSchema);