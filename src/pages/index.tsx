import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

interface IPageProps {
  [x: string]: any;
}

const HomePage: NextPage<IPageProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Rick An Morty Characters" />
      </Head>

      <main>
        <h1>HomePage</h1>
      </main>
    </>
  );
};

export default HomePage;
