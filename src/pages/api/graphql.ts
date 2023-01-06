import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { NextApiRequest } from 'next';

const books = [
  {
    id: '1',
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  { id: '2', title: 'City of Glass', author: 'Paul Auster' },
];

const getLoggedInUserJwt = async (req: NextApiRequest) => {
  const jwt = req.cookies['jwt'];
  return jwt;
};

const resolvers = {
  Query: {
    books: () => books,
    book: async (_: any, args: any, ctx: any, info: any) => {
      return books.find((curent) => curent.id === args.id);
    },
  },
};

const typeDefs = gql`
  type Book {
    id: ID!
    title: String
    author: String
  }
  type Query {
    books: [Book]
    book(id: ID!): Book
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res, jwt: await getLoggedInUserJwt(req) }),
});
