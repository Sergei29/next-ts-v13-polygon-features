import { QueryClient, QueryClientConfig, DefaultOptions } from '@tanstack/react-query';
import { DELAY } from '@/constants';

const queryErrorHandler = (error: unknown) => {
  const message = error instanceof Error ? error.message : 'Error occurred';

  // some toast msg for example
  console.log({ status: 'error', message });
};

export const defaultQueryClientOptions: DefaultOptions = {
  queries: {
    onError: queryErrorHandler,
    staleTime: DELAY.MINUTES_10,
    cacheTime: DELAY.MINUTES_15,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  },
  mutations: {
    onError: queryErrorHandler,
  },
};

const initialConfig: QueryClientConfig = {
  defaultOptions: defaultQueryClientOptions,
};

export const generateQueryClient = (config?: QueryClientConfig) =>
  new QueryClient(config || initialConfig);

export const queryClient = generateQueryClient();
