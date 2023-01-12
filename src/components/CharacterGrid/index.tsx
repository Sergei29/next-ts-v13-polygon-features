import React from "react";
import CharacterCard from "@/components/CharacterCard";
import { Character } from "@/types";

type Props = {
  data: Character[];
  loading: boolean;
  error: string | null;
};

export default function CharacterGrid({ data, loading, error }: Props) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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
        data.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
    </div>
  );
}
