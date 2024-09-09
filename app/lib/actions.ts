"use server";
import { User } from "@/app/lib/models";
import { connectDB } from "@/app/lib/connectDB";
import { getServerSession } from "next-auth";
import { authConfig } from "@/auth.config";
import { MessageDocument } from "./definitions";

export const getAllMessages = async () => {
  try {
    await connectDB();
    const session = await getServerSession(authConfig);
    if (!session) throw new Error("Unauthorized");
    const userDoc = await User.findById(session.user?.id);
    console.log("USER DOC: ", userDoc);
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
    user.messages.push({message});
    await user.save();
    console.log("MESSAGE CREATED: ", user.messages);
    return true;
  } catch (err) {
    console.error(err);
    return null;
  }
}

