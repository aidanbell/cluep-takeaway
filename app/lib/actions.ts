"use server";
import { User, Message } from "@/app/lib/models";
import { connectDB } from "@/app/lib/connectDB";


export const getAllMessages = async () => {
  try {
    await connectDB();
    const messages = await Message.find().populate("user");
    return messages;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export const createMessage = async (message: string, user: string) => {
  try {
    await connectDB();
    return await Message.create({ message, user });
  } catch (err) {
    console.error(err);
    return null;
  }
}

