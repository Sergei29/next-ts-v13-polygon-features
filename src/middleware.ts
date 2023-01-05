import { withAuth } from 'next-auth/middleware';
import { NextMiddleware, NextResponse } from 'next/server';

const handleAuthMiddleware: NextMiddleware = (request, event) => {
  // protected pathname
  // can do something here with call to authenticated pages
};

const authMiddleware = withAuth(handleAuthMiddleware, {
  callbacks: {
    authorized({ token, req }) {
      return !!token;
    },
  },
});

const handleApiMiddleware: NextMiddleware = (request, event) => {
  // all api routes

  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-hello-from-middleware1', 'hello');
  // You can also set request headers in NextResponse.rewrite
  return NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });
};

const handleOtherMiddleware: NextMiddleware = (request, event) => {
  // deal with all other cases...
  return NextResponse.next();
};

const rootMiddleware: NextMiddleware = (request, event) => {
  console.log('All routes: ', request.nextUrl.pathname);

  if (request.nextUrl.pathname.startsWith('/admin')) {
    return (authMiddleware as NextMiddleware)(request, event);
  }

  if (request.nextUrl.pathname.startsWith('/api')) {
    return handleApiMiddleware(request, event);
  }

  return handleOtherMiddleware(request, event);
};

export default rootMiddleware;

export const config = {
  matcher: ['/', '/admin/:path*', '/dashboard/:path*', '/api/:path*'],
};
