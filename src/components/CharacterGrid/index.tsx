import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getCharacters } from "@/lib";
import { queryKeys } from "@/constants";
import CharacterCard from "@/components/CharacterCard";
import { Character, PaginatedList } from "@/types";

export default function CharacterGrid() {
  const { data, isLoading, isError } = useQuery<PaginatedList<Character>>(
    [queryKeys.characters],
    () => getCharacters()
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching characters</div>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: 20,
      }}
    >
      {data &&
        data.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
    </div>
  );
}
