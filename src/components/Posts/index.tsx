'use client';

import React, { use } from 'react';

import { getData } from '@/utils';

const Posts = (): JSX.Element => {
  const { data: posts } = use(
    getData<Record<string, any>[]>(`${process.env.NEXT_PUBLIC_JSONPLACEHOLDER_API}/posts`)
  );

  return <div>{posts && posts.map((post) => <p key={post.id}>{post.title}</p>)}</div>;
};

export default Posts;
