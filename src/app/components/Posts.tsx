'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { getPosts } from '@/lib';

const Posts = (): JSX.Element => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Posts</h1>
      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Failed to fetch posts.</p>}
        {data && data.map((current) => <h4 key={current.id}>{current.title}</h4>)}
      </div>
    </div>
  );
};

export default Posts;
