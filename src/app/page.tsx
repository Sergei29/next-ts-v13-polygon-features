import React from 'react';

import ImageList from '@/components/ImageList';
import Posts from '@/components/Posts';
import { getData } from '@/utils';

const Homepage = async () => {
  const { data } = await getData<{ name: string }>(`${process.env.NEXT_PUBLIC_APP_URL}/api/hello`);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Next.JS v13</h1>
      {data && <h4 className="text-xl font-bold underline text-right">{data.name}</h4>}
      {/* <Posts /> */}
      <ImageList />
    </>
  );
};

export default Homepage;
