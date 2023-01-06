import React from 'react';

import BooksList from '@/components/BooksList';

const Homepage = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Next.JS v13</h1>
      <BooksList />
    </main>
  );
};

export default Homepage;
