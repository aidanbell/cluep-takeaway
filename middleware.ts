import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/messages"];

export async function middleware(req: NextRequest) {
  // Get the token from the request
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  // If the token is not present, redirect to the login page
  if (!token && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  
  // If the token is present and the user is trying to access the login page, redirect to the home page
  if (token && !protectedRoutes.includes(req.nextUrl.pathname)) {
    console.log("USER REDIRECTING")
    return NextResponse.redirect(new URL("/messages", req.url));
  }

  // Continue to the next middleware
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/messages"],
}