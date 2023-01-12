import React from "react";
import Image from "next/image";

import { Character } from "@/types";

interface IProps {
  character: Character;
}

const CharacterCard = ({ character }: IProps): JSX.Element => {
  const handleAdd = () => {};

  return (
    <div
      key={character.id}
      className="flex flex-col p-4 border-2 border-solid border-[#80acbb] rounded-md bg-yellow-50"
    >
      <Image
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
        className="w-full"
      />
      <div>
        <h2>{character.name}</h2>
        <h3>{character.species}</h3>
      </div>
      <button
        className="mt-auto bg-purple-800 px-2 py-1 rounded-md text-yellow-50 hover:bg-yellow-50 hover:text-purple-800 hover:border-2 hover:border-solid hover:border-purple-800"
        onClick={handleAdd}
      >
        {character.isFavorite ? "Remove from" : "Add to"} favorites
      </button>
    </div>
  );
};

export default CharacterCard;
