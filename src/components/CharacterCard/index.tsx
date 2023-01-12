import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Character } from "@/types";
import { useFavorites } from "@/providers/FavoritesProvider";

const getButtonClassName = (isFavorite: boolean) =>
  isFavorite
    ? "relative z-10 mt-auto bg-purple-800 px-2 py-1 rounded-md text-yellow-50 border-solid border-2 border-transparent hover:bg-yellow-50 hover:text-purple-800 hover:border-2 hover:border-solid hover:border-purple-800"
    : "relative z-10 mt-auto bg-[#318bbe] px-2 py-1 rounded-md text-yellow-50 border-solid border-2 border-transparent hover:bg-yellow-50 hover:text-purple-800 hover:border-2 hover:border-solid hover:border-purple-800";
interface IProps {
  character: Character;
}

const CharacterCard = ({ character }: IProps): JSX.Element => {
  const { state, setState } = useFavorites();
  const isFavorite = state.favorites.includes(character.id);

  const handleAdd = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setState((current) => ({
      ...current,
      favorites: current.favorites.includes(character.id)
        ? current.favorites.filter((charId) => charId !== character.id)
        : [...current.favorites, character.id],
    }));
  };

  return (
    <Link
      href={`/character/${character.id}`}
      className="flex flex-col p-4 border-2 border-solid border-[#80acbb] rounded-md bg-yellow-50 relative z-1"
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
      <button className={getButtonClassName(isFavorite)} onClick={handleAdd}>
        {isFavorite ? "Remove from" : "Add to"} favorites
      </button>
    </Link>
  );
};

export default CharacterCard;
