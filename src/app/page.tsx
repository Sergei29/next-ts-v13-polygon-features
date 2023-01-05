import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

interface IPageProps {
  [x: string]: any;
}

const Homepage: NextPage<IPageProps> = ({}) => {
  return (
    <main>
      <h1>Next.JS v13</h1>
    </main>
  );
};

export default Homepage;
