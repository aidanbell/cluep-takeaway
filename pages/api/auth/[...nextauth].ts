import NextAuth from "next-auth";
import { authConfig } from "../../../auth.config"; // Adjust the path according to your setup

export default NextAuth(authConfig);
