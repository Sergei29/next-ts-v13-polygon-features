import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: Author!
    description: String
    image: Image
  }

  type Author {
    id: ID!
    name: String!
    about: String!
    books: [Book]
  }

  type Image {
    id: ID!
    url: String!
    width: Int
    height: Int
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }
`;
