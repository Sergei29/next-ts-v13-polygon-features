import {
  QueryClient,
  DefaultOptions,
  QueryClientConfig,
} from "@tanstack/react-query";

import { DELAY } from "@/constants";

const queryErrorHandler = (error: unknown) => {
  const message =
    error instanceof Error ? error.message : "Unknown error occurred";
  // later  can make a toas message for example
  console.log({ error: message, status: "error" });
};

export const defaultQueryOptions: DefaultOptions = {
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
  defaultOptions: defaultQueryOptions,
};

export const generateQueryCLient = (config?: QueryClientConfig): QueryClient =>
  new QueryClient(config || initialConfig);

export const queryClient = generateQueryCLient();
