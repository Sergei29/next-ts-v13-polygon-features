import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextApiRequest } from 'next';

import { typeDefs, resolvers } from '@/graphql/server';

const getLoggedInUserJwt = async (req: NextApiRequest) => {
  const jwt = req.cookies['jwt'];
  return jwt;
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res, jwt: await getLoggedInUserJwt(req) }),
});
