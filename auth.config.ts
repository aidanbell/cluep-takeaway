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
          id: profile.sub, // sub is the googleID
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
      try {
        await connectDB();
        const existingUser = await UserModel.findOne({ googleID: user.id });
        if (!existingUser) {
          const newUser = await UserModel.create({
            googleID: user.id,
            email: user.email,
            firstName: (user as UserDocument).firstName,
            lastName: (user as UserDocument).lastName,
            image: user.image,
          });
        }
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async jwt({ token,user }: { token: any; user: User; }) {
      if (token.id && token.name) return token;
      const dbUser = await UserModel.findOne({ googleID: user.id });
      if (dbUser) {
        token.id = dbUser._id;
        token.name = `${(user as UserDocument).firstName} ${
          (user as UserDocument).lastName
        }`;
      }
      return token;
    },
    async session({ session, token }) {
      console.log("making session");
      if (session.user) {
        session.user.name = token.name;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};
