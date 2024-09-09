"use server";
import { User, Message } from "@/app/lib/models";
import { connectDB } from "@/app/lib/connectDB";
import { getServerSession } from "next-auth";
import { authConfig } from "@/auth.config";

export const getAllMessages = async () => {
  try {
    await connectDB();
    const session = await getServerSession(authConfig);
    if (!session) throw new Error("Unauthorized");
    const userDoc = await User.findById(session.user?.id).populate("messages");
    console.log(userDoc)
    return userDoc?.messages;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export const createMessage = async (message: string) => {
  try {
    await connectDB();
    const session = await getServerSession(authConfig);
    if (!session) throw new Error("Unauthorized");
    const user = await User.findById(session.user?.id);
    if (!user) throw new Error("User not found");
    const newMessage = new Message({ message });
    await newMessage.save();
    user.messages.push(newMessage);
    await user.save();
    console.log("MESSAGE CREATED: ", newMessage);
    return newMessage.toObject();
  } catch (err) {
    console.error(err);
    return null;
  }
}

