import { InMemoryCacheConfig } from "@apollo/client";
import { favoriteShipsVar } from "./reactiveVars";

export const cacheConfig: InMemoryCacheConfig = {
  typePolicies: {
    Ship: {
      fields: {
        isFavorite: {
          read: (_, { variables, readField }) => {
            const shipId = readField("id") as string;
            return favoriteShipsVar().includes(shipId);
          },
        },
      },
    },
  },
};
