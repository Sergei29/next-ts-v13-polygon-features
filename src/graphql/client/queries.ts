import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query books {
    books {
      id
      author
      title
    }
  }
`;

export const GET_BOOK_BY_ID = gql`
  query book($id: ID!) {
    book(id: $id) {
      id
      author
      title
    }
  }
`;
