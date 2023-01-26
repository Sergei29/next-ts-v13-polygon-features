'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, Hydrate, DehydratedState } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Script from 'next/script';

type Props = {
  dehydratedState: DehydratedState;
  children: React.ReactNode;
};

const ReactQuery = ({ children, dehydratedState }: Props) => {
  const [queryClient] = useState(new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>{children}</Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>

      <Script id="react-query">
        {`window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)}`}
      </Script>
    </>
  );
};

export default ReactQuery;
