import { NextResponse, NextMiddleware } from 'next/server';

export const middleware: NextMiddleware = (req, event) => {
  const res = NextResponse.next({
    request: {
      headers: new Headers(req.headers),
    },
  });

  const mySecret = req.cookies.get('x-httpOnly-my-cookie')?.value;
  console.log('path: ', req.nextUrl.pathname);
  console.log('request/ my secret cookie: ', mySecret);

  !!mySecret && res.headers.set('x-my-secret', mySecret);
  !mySecret && res.cookies.set('x-httpOnly-my-cookie', 'wow-some-secret-value', { httpOnly: true });
  res.cookies.set('x-visible-my-cookie', 'on-client-visible-value');

  return res;
};

export const config = {
  matcher: ['/', '/api/:path*'],
};
