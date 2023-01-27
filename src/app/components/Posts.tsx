'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const getPosts = async (): Promise<
  {
    id: number;
    title: string;
  }[]
> => {
  try {
    const res = await fetch('/api/posts');
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await res.json();
  } catch (error) {
    throw error;
  }
};

interface IProps {
  [x: string]: any;
}

const Posts = ({}: IProps): JSX.Element => {
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
