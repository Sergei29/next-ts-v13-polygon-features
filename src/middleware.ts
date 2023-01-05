import { withAuth } from 'next-auth/middleware';
import { NextMiddleware } from 'next/server';

const handleAuthMiddleware: NextMiddleware = (request, event) => {
  console.log('request.nextUrl.pathname: ', request.nextUrl.pathname);
};

const authMiddleware = withAuth(handleAuthMiddleware, {
  callbacks: {
    authorized({ token, req }) {
      return !!token;
    },
  },
});

export default authMiddleware;

export const config = { matcher: ['/admin/:path*'] };
