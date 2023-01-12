import axios from "axios";

import { PaginatedList, Character, CharacterDetails } from "@/types";
import { NEXT_PUBLIC_RICK_AND_MORTY_REST_API } from "@/constants";

export const getCharacters = async (page?: number) => {
  const { data } = await axios.get<PaginatedList<Character>>(
    `${NEXT_PUBLIC_RICK_AND_MORTY_REST_API}/character/?page=${page || 0}`
  );
  return data;
};

export const getCharacterbyId = async (characterId: string) => {
  const { data } = await axios.get<CharacterDetails>(
    `${NEXT_PUBLIC_RICK_AND_MORTY_REST_API}/character/${characterId}`
  );
  return data;
};
