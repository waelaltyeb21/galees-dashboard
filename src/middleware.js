import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const token = (await cookies()).get("token");
  // console.log("Verifying Token...");
  // Prevent Access To Login Page After Logged In
  console.log("Pathname: ", request.nextUrl.pathname);
  if (request.nextUrl.pathname === "/login")
    return NextResponse.redirect(new URL("/", request.url));

  // Check Token Before Access To Any Page
  if (token) return NextResponse.next();
  // if the user is not logged in and tries to access the home page, redirect to the login page
  return NextResponse.redirect(new URL("/login", request.url));
};

export const config = {
  matcher: ["/", "/books/:path*", "/categories/:path*", "/settings/:path*"],
};
