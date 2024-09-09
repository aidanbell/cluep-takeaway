import { NextAuthOptions, User } from "next-auth";
import Google from "next-auth/providers/google";
import { connectDB } from "@/app/lib/connectDB";
import { UserDocument } from "./app/lib/definitions";
import { User as UserModel } from "./app/lib/models";

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      profile(profile) {
        return {
          id: profile.sub,
          email: profile.email,
          firstName: profile.given_name,
          lastName: profile.family_name,
          image: profile.picture,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("SIGN IN:");
      console.log("USER: ", user);
      console.log("ACCOUNT: ", account);
      console.log("PROFILE: ", profile);
      // First check for user
      await connectDB();
      const existingUser = await UserModel.findOne({ googleID: user.id });
      if (existingUser) {
        return true;
      } else {
        // Create user
        const newUser = await UserModel.create({
          googleID: user.id,
          email: user.email,
          firstName: (user as UserDocument).firstName,
          lastName: (user as UserDocument).lastName,
          image: user.image,
        });
        console.log("NEW USER: ", newUser);
        return true;
      }
    },
    async jwt({
      token,
      user,
    }: {
      token: any;
      user: User;
    }) {
      if (user) {
        token.name = `${(user as UserDocument).firstName} ${
          (user as UserDocument).lastName
        }`;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name;
      }
      return session;
    },
  },
};
