"use server";
import { User } from "@/app/lib/models";
import { connectDB } from "@/app/lib/connectDB";
import { getServerSession } from "next-auth";
import { authConfig } from "@/auth.config";
import { revalidatePath } from "next/cache";

export const getMessages = async (query:string) => {
  try {
    await connectDB();
    const session = await getServerSession(authConfig);
    if (!session) throw new Error("Unauthorized");
    const userDoc = await User.findById(session.user?.id);
    const sortedMessages = userDoc?.messages.slice().sort((a, b) => {
      return b.createdAt.getTime() - a.createdAt.getTime();
    });
    if (query) {
      const filteredMessages = sortedMessages?.filter((message) => {
        return message.message.toLowerCase().includes(query.toLowerCase());
      });
      return filteredMessages;
    };
    return sortedMessages;
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
    revalidatePath("/");
    return true;
  } catch (err) {
    console.error(err);
    return null;
  }
}

