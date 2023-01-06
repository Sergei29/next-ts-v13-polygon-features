import { Book } from '@/types';
import { db } from '@/db';

export const resolvers = {
  Query: {
    books: async () => {
      const books = await db.getData('/books');
      return books;
    },
    book: async (_: any, args: any, ctx: any, info: any) => {
      const books: Book[] = await db.getData('/books');
      return books.find((curent) => curent.id === args.id);
    },
  },
};
