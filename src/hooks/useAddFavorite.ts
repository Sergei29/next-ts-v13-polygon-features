import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/constants";
import { Character, PaginatedList } from "@/types";
import { useFavorites } from "@/providers/FavoritesProvider";

type HookProps = {
  characters?: Character[];
};

const useAddFavorite = ({ characters = [] }: HookProps) => {
  const { state, setState } = useFavorites();

  const handleAddFavorite = (id: string) => {
    setState((current) => ({
      ...current,
      favorites: current.favorites.includes(id)
        ? current.favorites.filter((charId) => charId !== id)
        : [...current.favorites, id],
    }));
  };

  return {
    handleAddFavorite,
    characters: characters.filter((current) =>
      state.favorites.includes(current.id)
    ),
  };
};

export default useAddFavorite;
