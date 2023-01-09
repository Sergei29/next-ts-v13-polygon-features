'use client';

import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';

import { GET_BOOKS } from '@/graphql/client';
import { Book } from '@/types';

const BooksList = (): JSX.Element => {
  return (
    <div>
      <h2>Books</h2>
      <div className="flex flex-wrap gap-2 justify-center"></div>
    </div>
  );
};

export default BooksList;
