import { InMemoryCacheConfig } from '@apollo/client';
import { favoriteCharactersVar } from './reactiveVars';

export const cacheConfig: InMemoryCacheConfig = {
  typePolicies: {
    Character: {
      fields: {
        isFavorite: {
          read: (_, { variables, readField }) => {
            const characterId = readField('id') as string;
            return favoriteCharactersVar().includes(characterId);
          },
        },
      },
    },
  },
};
