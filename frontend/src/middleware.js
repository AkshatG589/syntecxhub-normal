import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// This will only match routes that contain "/apply" inside the training folder
const isProtectedRoute = createRouteMatcher([
  '/training/(.*)/apply(.*)', 
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect(); 
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};