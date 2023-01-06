import {
  ApolloClient,
  InMemoryCache,
  InMemoryCacheConfig,
} from "@apollo/client";

import { NEXT_PUBLIC_SPACEX_API } from "@/constants";

const cacheConfig: InMemoryCacheConfig = {};

export const apolloClient = new ApolloClient({
  uri: NEXT_PUBLIC_SPACEX_API,
  cache: new InMemoryCache(cacheConfig),
});
