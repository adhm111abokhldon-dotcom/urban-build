import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

// Next.js 16 renamed Middleware to Proxy — same purpose, new file convention.
export default createMiddleware(routing);

export const config = {
  // Match every pathname except API routes, Next.js internals and
  // requests that contain a dot (e.g. /favicon.ico, /assets/logo.svg).
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
