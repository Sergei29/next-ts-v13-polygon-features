import React from "react";

import { ShipSummary } from "@/types";
import { favoriteShipsVar } from "@/graphql/client";

export const toggleAddToFavorites = (id: string) => {
  const currentFavs = favoriteShipsVar();
  const isInFavs = currentFavs.includes(id);
  const newFavs = isInFavs
    ? currentFavs.filter((current) => current !== id)
    : [...currentFavs, id];
  favoriteShipsVar(newFavs);
};

type Props = Pick<ShipSummary, "id" | "isFavorite">;

const FavShipButton = ({ id, isFavorite }: Props): JSX.Element => {
  const handleFavButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    toggleAddToFavorites(id);
  };

  return (
    <button
      onClick={handleFavButton}
      title="favorites"
      className="z-10 px-4 py-1 rounded-xl border-solid border-2 border-indigo-600 hover:bg-slate-500"
    >
      {isFavorite ? "remove" : "add"}
    </button>
  );
};

export default FavShipButton;
