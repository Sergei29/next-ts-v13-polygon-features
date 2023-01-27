import React from 'react';
import { dehydrate, QueryClient } from '@tanstack/query-core';

import { generateQueryClient } from '@/queryClient';
import { fetchTest } from '@/lib';

import ReactQuery from './ReactQuery';

interface IProps {
  children: React.ReactNode;
}

const PrefetchContent = async ({ children }: IProps) => {
  const queryClient = new QueryClient();

  // alternatively, use queryClient.setQuery and/or access data directly
  await queryClient.prefetchQuery(['test'], fetchTest);

  const provider = <ReactQuery dehydratedState={dehydrate(queryClient)}>{children}</ReactQuery>;

  queryClient.clear();

  return provider;
};

export default PrefetchContent;
