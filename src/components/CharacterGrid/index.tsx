import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_CHARACTERS } from '@/graphql/client';
import CharacterCard from '@/components/CharacterCard';
import { Character, PaginatedList } from '@/types';

export default function CharacterGrid() {
  const { data, loading, error } = useQuery<{ characters: PaginatedList<Character> }>(
    GET_CHARACTERS
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 20,
      }}
    >
      {data &&
        data.characters.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
    </div>
  );
}
