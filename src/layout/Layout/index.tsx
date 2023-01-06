import React from "react";
import Head from "next/head";

import Navigation from "@/components/Navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Next page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation />
      </header>
      <main className="px-4 py-2">{children}</main>
    </>
  );
};

export default Layout;
