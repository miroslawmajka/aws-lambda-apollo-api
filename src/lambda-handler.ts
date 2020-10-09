import { ApolloServer } from 'apollo-server-lambda';
import { APIGatewayProxyEvent, Context, APIGatewayProxyCallback } from 'aws-lambda';

import { default as resolvers } from './resolvers';
import { default as schema } from './schema';

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  }),
  playground: {
    endpoint: '/dev/graphql'
  }
});

export const graphqlHandler = async (event: APIGatewayProxyEvent, context: Context) => {
  const apolloHandler = apolloServer.createHandler({
    cors: {
      origin: '*',
      methods: 'POST',
      allowedHeaders: ['Content-Type', 'Origin', 'Accept']
    }
  });

  async function runApolloHandlerAsPromise(
    event: APIGatewayProxyEvent,
    context: Context,
    apolloHandler: any
  ) {
    return new Promise((resolve: Function, reject: Function) => {
      const callback: APIGatewayProxyCallback = (error: any, body: any) =>
        error ? reject(error) : resolve(body);

      apolloHandler(event, context, callback);
    });
  }

  return await runApolloHandlerAsPromise(event, context, apolloHandler);
};
