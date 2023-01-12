export type Character = {
  id: string;
  name: string;
  image: string;
  species: string;
  isFavorite?: boolean;
};

export type PageInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type PaginatedList<T> = {
  info: PageInfo;
  results: T[];
};

export type CharacterDetails = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};
