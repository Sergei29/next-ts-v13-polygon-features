import {
  ApolloClient,
  InMemoryCache,
  InMemoryCacheConfig,
  ApolloProvider,
  gql,
} from '@apollo/client';

import { NEXT_PUBLIC_APP_URL } from '@/constants';

const cacheConfig: InMemoryCacheConfig = {};

export const client = new ApolloClient({
  uri: `${NEXT_PUBLIC_APP_URL}/api/graphql`,
  cache: new InMemoryCache(cacheConfig),
});
