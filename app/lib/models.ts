import mongoose, { Model } from "mongoose";

import { UserDocument, MessageDocument } from "@/app/lib/definitions";

const messageSchema = new mongoose.Schema<MessageDocument>({
  message: { type: String, required: true },
}, { timestamps: true });

const userSchema = new mongoose.Schema<UserDocument>({
  googleID: { type: String },
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
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  image: { type: String },
  messages: [messageSchema],
});

userSchema.virtual("fullname").get(function (this: UserDocument) {
  return `${this.firstName} ${this.lastName}`;
});


export const User: Model<UserDocument> = mongoose.models?.User || mongoose.model("User", userSchema);