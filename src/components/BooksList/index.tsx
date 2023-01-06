'use client';

import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';

import { GET_BOOKS } from '@/graphql/client';
import { Book } from '@/types';

const BooksList = (): JSX.Element => {
  const { data, loading, error } = useQuery<{ books: Book[] }>(GET_BOOKS);

  return (
    <div>
      <h2>Books</h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {loading && <h4>Loading...</h4>}
        {error && <p className="text-red-600 font-bold">{error.message}</p>}
        {data &&
          data.books.map((current) => (
            <Link
              key={current.id}
              className="bg-slate-300 rounded-sm p-2 flex flex-col items-center"
              href={`/book/${current.id}`}
            >
              <h4>{current.title}</h4>
              <p>By {current.author}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BooksList;
