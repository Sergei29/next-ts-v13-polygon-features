import React from "react";
import Image from "next/image";

import { Character } from "@/types";

type Props = {
  data: Character[];
  loading: boolean;
  error: string | null;
};

const Favorites = ({ data, loading, error }: Props): JSX.Element => {
  const handleRemoveFromFavorites = (characterId: string) => {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data.length) {
    return (
      <div className="flex justify-center items-center min-h-[220px] mt-4">
        <p className="text-[#318bbe] font-semibold">
          No favorites. Add someone to your list.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-8 min-h-[220px] mt-4">
      {data.map((character) => (
        <div key={character.id} className="relative h-[100px]">
          <Image
            src={character.image}
            alt="rick&morty"
            height={300}
            width={300}
            className="w-full rounded-full border-solid border-4 border-[#318bbe]"
          />
          <button
            onClick={() => handleRemoveFromFavorites(character.id)}
            className=" absolute left-0 bottom-1 w-[30px] h-[30px] rounded-full border-solid border-4 border-[#318bbe] hover:bg-red-900 bg-red-800 text-white flex justify-center items-center pb-1"
          >
            <span>x</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
