import { withAuth } from 'next-auth/middleware';
import { NextMiddleware, NextResponse } from 'next/server';

const handleAuthMiddleware: NextMiddleware = (request, event) => {
  console.log('protected pathname: ', request.nextUrl.pathname);
  // can do something here with call to authenticated pages
};

const authMiddleware = withAuth(handleAuthMiddleware, {
  callbacks: {
    authorized({ token, req }) {
      return !!token;
    },
  },
});

const handleOtherMiddleware: NextMiddleware = (request, event) => {
  console.log('Other not protected routes: ', request.nextUrl.pathname);
  // deal with all other cases...
  return NextResponse.next();
};

const rootMiddleware: NextMiddleware = (request, event) => {
  console.log('All routes: ', request.nextUrl.pathname);

  if (request.nextUrl.pathname.startsWith('/admin')) {
    return (authMiddleware as NextMiddleware)(request, event);
  }

  return handleOtherMiddleware(request, event);
};

export default rootMiddleware;

export const config = { matcher: ['/admin/:path*', '/dashboard'] };
