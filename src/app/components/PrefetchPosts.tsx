import React from 'react';
import { dehydrate, QueryClient } from '@tanstack/query-core';

import ReactQuery from '@/app/ReactQuery';
import { getPosts } from '@/lib';

interface IProps {
  children: React.ReactNode;
}

const PrefetchPosts = async ({ children }: IProps) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });

  const wrapper = <ReactQuery dehydratedState={dehydrate(queryClient)}>{children}</ReactQuery>;
  queryClient.clear();

  return wrapper;
};

export default PrefetchPosts;
