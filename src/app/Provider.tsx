import React from 'react';
import { QueryClient, dehydrate } from '@tanstack/query-core';
import ReactQuery from './ReactQuery';
import fetchTest from '../lib';

interface IProps {
  children: React.ReactNode;
}

const Provider = async ({ children }: IProps) => {
  const queryClient = new QueryClient();

  // alternatively, use queryClient.setQuery and/or access data directly
  await queryClient.prefetchQuery(['test'], fetchTest);

  const provider = <ReactQuery dehydratedState={dehydrate(queryClient)}>{children}</ReactQuery>;

  queryClient.clear();

  return provider;
};

export default Provider;
