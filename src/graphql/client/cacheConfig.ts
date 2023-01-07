import { InMemoryCacheConfig } from "@apollo/client";
import { favoriteShipsVar } from "./reactiveVars";

export const cacheConfig: InMemoryCacheConfig = {
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
