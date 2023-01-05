'use client';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

import AppBar from './AppBar';
import './globals.css';

type Props = {
  children: React.ReactNode;
  session?: Session | null;
};

export default function RootLayout({ children, session }: Props) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
          <AppBar />
          <div className={'  h-screen '}>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
