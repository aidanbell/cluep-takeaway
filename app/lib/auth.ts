import { connectDB } from "./connectDB";
import { User, Message } from "./models";
import { UserDocument } from "./definitions";
import type { NextAuthOptions } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials,
        req
      ): Promise<UserDocument | null> {
        await connectDB();
        const user = await User.findOne({ email: credentials?.email }).select(
          "+password"
        );
        if (!user) {
          throw new Error("No user found");
        }
        const isValid = await bcrypt.compare(
          credentials?.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Invalid password");
        }
        return user.toObject();
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session(session, user) {
      session.user = user;
      return session;
    },
  },
};
