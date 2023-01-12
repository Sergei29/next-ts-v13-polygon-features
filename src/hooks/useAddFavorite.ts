import { useQueryClient, useMutation } from "@tanstack/react-query";

import { queryKeys } from "@/constants";
import { Character, PaginatedList } from "@/types";

const useAddFavorite = () => {
  const queryClient = useQueryClient();

  const { mutate, isError } = useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      await queryClient.cancelQueries({ queryKey: [queryKeys.characters] });
      const currentPageData = queryClient.getQueryData<
        PaginatedList<Character>
      >([queryKeys.characters]);
      if (!currentPageData) return;

      const currentCharacters = currentPageData.results;
      const newCharacters = currentCharacters.map((current) => {
        if (current.id === id) {
          return {
            ...current,
            isFavorite: !!current.isFavorite ? false : true,
          };
        }
        return current;
      });
      const newPageData: PaginatedList<Character> = {
        ...currentPageData,
        results: newCharacters,
      };
      queryClient.setQueryData([queryKeys.characters], newPageData);
    },
    mutationKey: [queryKeys.characters],
  });

  const handleAddFavorite = (id: string) => {
    mutate({ id });
  };

  return { handleAddFavorite, isError };
};

export default useAddFavorite;
