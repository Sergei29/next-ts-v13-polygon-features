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
  next: number | null;
  prev: number | null;
};

export type PaginatedList<T> = {
  info: PageInfo;
  results: T[];
};
