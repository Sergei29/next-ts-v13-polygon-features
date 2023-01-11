import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Navigation from "@/components/Navigation";

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

      <header className="py-4">
        <Navigation />
      </header>
      <main className="w-[80%] mx-auto">{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
