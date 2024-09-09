import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { connectDB } from "@/app/lib/connectDB";
import { User } from "@/app/lib/models";
import bcrypt from "bcrypt";
import { UserDocument } from "./app/lib/definitions";

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await connectDB();
        const user = await User.findOne({ email: credentials?.email });

        if (!user) {
          throw new Error("No user found");
        }

        // Compare the password
        const isValid = await bcrypt.compare(
          credentials?.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Invalid password");
        }

        // Return the user object (excluding the password field)
        return user.toObject();
      },
    }),
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //   profile(profile) {
    //     return {
    //       id: profile.id,
    //       email: profile.email,
    //       name: profile.name,
    //       image: profile.picture,
    //     };
    //   }
    // }),
  ],
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        const { firstName, lastName } = user as UserDocument;
        token.fullName = `${firstName} ${lastName}`;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Attach the user info to the session object
      if (session.user) {
        session.user.name = token.fullName as string;
      }
      
      return session;
    },
  },
};
