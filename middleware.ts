import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/events/[id]',
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing'
])

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    try {
      await auth.protect();
    } catch (error) {
      // Handle error or redirect to custom page if needed
      console.error('Authentication failed:', error);
    }
  }
});
 
export const config = {
  matcher: [
    '/', // Home page
    '/events/:id', // Dynamic event pages
    '/api/webhook/clerk', // Clerk webhook
    '/api/webhook/stripe', // Stripe webhook
    '/api/uploadthing', // Uploadthing API
    '/(api|trpc)(.*)', // API routes
    '/((?!_next|.*\\..*).*)' // Exclude internal Next.js routes and files with extensions
  ],
};