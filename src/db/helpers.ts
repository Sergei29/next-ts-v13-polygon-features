import { Book, NewBookInput } from '@/types';
import { v4 as uuid } from 'uuid';

import { db } from '.';

export const getBooks = async (): Promise<Book[]> => await db.getData('/books');

export const getBookById = async (id: string) => {
  const books = await getBooks();

  return books.find((current) => current.id === id);
};

export const addNewBook = async (input: NewBookInput): Promise<Book> => {
  const newBook = { id: uuid(), ...input };
  const books = await getBooks();
  const booksUpdated = [...books, newBook];
  await db.push('/books', booksUpdated);

  return newBook;
};

export const updateBook = async (id: string, bookFields: Partial<NewBookInput>) => {
  const bookFound = await getBookById(id);
  if (!bookFound) {
    throw new Error('not found');
  }

  const books = await getBooks();
  const updatedBook: Book = { ...bookFound, ...bookFields };

  const booksUpdated = books.map((current) => (current.id === id ? updatedBook : current));
  await db.push('/books', booksUpdated);

  return updatedBook;
};

export const deleteBookById = async (id: string) => {
  const bookToDelete = await getBookById(id);
  if (!bookToDelete) {
    throw new Error('not found');
  }

  const books = await getBooks();
  const booksUpdated = books.filter((current) => current.id !== id);
  await db.push('/books', booksUpdated);

  return bookToDelete;
};
