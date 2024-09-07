import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/", "/login"];

export async function middleware(req: NextRequest) {
  // Get the token from the request
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  console.log("TOKEN", token)
  // If the token is not present, redirect to the login page
  if (!token && protectedRoutes.includes(req.nextUrl.pathname)) {
    console.log("NO USER REDIRECTING")
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Continue to the next middleware
  return NextResponse.next();
}

export const config = {
  matcher: ["/"]
}