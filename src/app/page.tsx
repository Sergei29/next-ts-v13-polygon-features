import React from 'react';
import type { NextPage } from 'next';
import Content from './Content';

interface IPageProps {
  [x: string]: any;
}

const Homepage: NextPage<IPageProps> = ({}) => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Next.JS v13</h1>
      <Content />
    </main>
  );
};

export default Homepage;
