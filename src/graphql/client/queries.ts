import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query Books {
    books {
      id
      createdAt
      title
      author {
        id
        createdAt
        name
      }
      description
      image {
        id
        url
        width
        height
      }
    }
  }
`;

export const GET_BOOK_BY_ID = gql`
  query Book($id: ID!) {
    book(id: $id) {
      id
      createdAt
      title
      author {
        id
        createdAt
        name
        about
        books {
          id
          title
          image {
            id
            url
            width
            height
          }
        }
      }
      description
      image {
        id
        url
        width
        height
      }
    }
  }
`;

export const GET_AUTHORS = gql`
  query Authors {
    authors {
      id
      createdAt
      name
      about
      books {
        id
        createdAt
        title
        description
        image {
          url
          width
          height
        }
      }
    }
  }
`;
