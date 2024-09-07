import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectDB } from "@/app/lib/connectDB";
import { User } from "@/app/lib/models";
import bcrypt from "bcrypt";

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Connect to the database
        console.log("CALLING AUTHORIZE");
        await connectDB();

        // Find the user by email
        const user = await User.findOne({ email: credentials?.email }).select(
          "+password"
        );

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
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Attach the user info to the session object
      session.user = token;
      return session;
    },
  },
};
