import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("authjs.session-token") || request.cookies.get("__Secure-authjs.session-token");
  const { pathname, origin } = request.nextUrl;
  const hasToken = !!sessionToken;

  console.log("HAS TOKEN =", hasToken);
  console.log("Requested URL =", request.url);
  console.log("Pathname =", pathname);
  console.log("Session Token =", sessionToken);

  if (!hasToken && pathname !== "/login") {
    const loginUrl = new URL("/login", origin);
    console.log("Redirecting to login:", loginUrl.href);
    return NextResponse.redirect(loginUrl);
  }

  if (hasToken && pathname === "/login") {
    const homeUrl = new URL("/", origin);
    console.log("Redirecting to home:", homeUrl.href);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/api/auth/callback", "/api/auth/session"],
};
