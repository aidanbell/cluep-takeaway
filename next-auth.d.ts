import { User } from "next-auth";

declare module "next-auth" {
  interface User extends UserDocument {}

  interface Session {
    user: User;
  }
}