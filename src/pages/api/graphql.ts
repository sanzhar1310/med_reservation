import { ApolloServer } from 'apollo-server-micro';
import db from './database';
import { resolvers } from './resolvers';
import { schema } from './schema';

const apolloServer = new ApolloServer({ schema, resolvers, context: { db } });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
