export type Book = {
  id: string;
  title: string;
  author: string;
};

export type NewBookInput = Pick<Book, 'title' | 'author'>;
