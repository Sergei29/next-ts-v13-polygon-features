import {
  ApolloClient,
  InMemoryCache,
  InMemoryCacheConfig,
} from "@apollo/client";

import { NEXT_PUBLIC_SPACEX_API } from "@/constants";
import { favoriteShipsVar } from "./reactiveVars";

const cacheConfig: InMemoryCacheConfig = {
  typePolicies: {
    Ship: {
      fields: {
        isFavorite: {
          read: (_, { variables }) =>
            variables?.id ? favoriteShipsVar().includes(variables.id) : false,
        },
      },
    },
  },
};

export const apolloClient = new ApolloClient({
  uri: NEXT_PUBLIC_SPACEX_API,
  cache: new InMemoryCache(cacheConfig),
});
