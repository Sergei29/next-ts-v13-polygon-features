'use client';
import React, { use } from 'react';
import Image from 'next/image';

import { getData } from '@/utils';

/**
 * create just one single promise -  this will fix the recursive calls while using `use` hook
 * with the fetcher function
 */
const dataPromise = getData<Record<string, any>[]>(
  `${process.env.NEXT_PUBLIC_JSONPLACEHOLDER_API}/albums/1/photos`
);

const ImageList = () => {
  /**
   * this will fix the recursive calls while using `use` hook
   * with the fetcher function
   */
  const { data: images } = use(dataPromise);

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {images &&
        images.map((img) => (
          <div
            key={img.id}
            className=" bg-slate-400 rounded-md p-2 w-1/5 flex flex-col items-center"
          >
            <Image
              src={img.thumbnailUrl}
              width={150}
              height={150}
              alt="jsonplaceholder thumbnail"
            />
            <p className="text-center">{img.title}</p>
          </div>
        ))}
    </div>
  );
};

export default ImageList;
