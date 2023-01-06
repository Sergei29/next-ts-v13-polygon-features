import React from 'react';

import { client, GET_BOOK_BY_ID, GET_BOOKS } from '@/graphql/client';
import { Book } from '@/types';

export async function generateStaticParams() {
  const { data } = await client.query<{ books: Book[] }>({
    query: GET_BOOKS,
  });

  return data.books.map((book) => ({
    id: book.id,
  }));
}

type PageProps = {
  params: Record<string, string>;
};

const BookPage = async ({ params }: PageProps) => {
  const { id } = params;

  const { data, error } = await client.query<{ book: Book }>({
    query: GET_BOOK_BY_ID,
    variables: { id },
  });

  return (
    <div>
      <h2> Book Page</h2>
      <p>ID: {id}</p>
      <div>
        {data?.book ? (
          <>
            <h4>{data.book.title}</h4>
            <p>By {data.book.author}</p>
          </>
        ) : (
          <p className="text-red-600 font-bold">Book not found</p>
        )}
        {error && <p className="text-red-600 font-bold">{error.message}</p>}
      </div>
    </div>
  );
};

export default BookPage;
