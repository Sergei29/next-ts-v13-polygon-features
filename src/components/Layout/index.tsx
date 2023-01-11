import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Navigation from '@/components/Navigation';

interface IPageProps {
  children: React.ReactNode;
}

const Layout: NextPage<IPageProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next.js App</title>
        <meta name="description" content="Next page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navigation />
      </header>
      <main className="px-4 py-2">{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
