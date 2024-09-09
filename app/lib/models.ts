import mongoose, { Model } from "mongoose";

import { UserDocument, MessageDocument } from "@/app/lib/definitions";


const userSchema = new mongoose.Schema<UserDocument>({
  _id: { type: mongoose.Schema.Types.ObjectId },
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
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
});

userSchema.virtual("fullname").get(function (this: UserDocument) {
  return `${this.firstName} ${this.lastName}`;
});

// userSchema.virtual("id").get(function (this: UserDocument) {
//   return (this._id as mongoose.Types.ObjectId).toHexString();
// });

const messageSchema = new mongoose.Schema<MessageDocument>({
  message: { type: String, required: true },
}, { timestamps: true });

export const User: Model<UserDocument> = mongoose.models?.User || mongoose.model("User", userSchema);
export const Message: Model<MessageDocument> = mongoose.models?.Message || mongoose.model("Message", messageSchema);