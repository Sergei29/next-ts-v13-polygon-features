import React from 'react';
import type { NextPage } from 'next';

interface IPageProps {
  [x: string]: any;
}

const Homepage: NextPage<IPageProps> = ({}) => {
  return (
    <h1 className="flex justify-center items-center p-5 text-green-500 text-lg font-bold">
      This is the Home page - everyone can access it.
    </h1>
  );
};

export default Homepage;
