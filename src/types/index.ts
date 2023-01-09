import { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClientSingletone } from '@/db';

export type Book = {
  id: string;
  createdAt: Date;
  title: string;
  author: Author;
  description: string | null;
  image: Image | null;
};

export type Image = {
  id: string;
  url: string;
  width?: number;
  height?: number;
};

export type Author = {
  id: string;
  createdAt: Date;
  name: string;
  about: string;
  books: Book[];
};

export type NewBookInput = Pick<Book, 'title' | 'author'>;

export type ServerContextType = {
  req: NextApiRequest;
  res: NextApiResponse;
  db: InstanceType<typeof PrismaClientSingletone>;
};
