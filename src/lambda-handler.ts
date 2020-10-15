import { ApolloServer, CreateHandlerOptions, Config as ApolloConfig } from 'apollo-server-lambda';
import { Context as ApolloContext } from 'apollo-server-core';
import { APIGatewayProxyEvent, Context, APIGatewayProxyCallback } from 'aws-lambda';

import { default as resolvers } from './resolvers';
import { default as schema } from './schema';

const apolloConfig: ApolloConfig = {
  typeDefs: schema,
  resolvers,
  context: ({ event, context }): ApolloContext => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  playground: {
    endpoint: '/dev/graphql', // The API Gateway endpoint "dev" part depends on the stage being deployed
  },
};

const apolloHandlerOptions: CreateHandlerOptions = {
  cors: {
    origin: '*',
    methods: 'POST',
    allowedHeaders: ['Content-Type', 'Origin', 'Accept'],
  },
};

const apolloServer = new ApolloServer(apolloConfig);

export const graphqlHandler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<Object> => {
  const apolloHandler = apolloServer.createHandler(apolloHandlerOptions);

  async function runApolloHandlerAsPromise(
    event: APIGatewayProxyEvent,
    context: Context,
    apolloHandler: any,
  ): Promise<Object> {
    return new Promise((resolve: Function, reject: Function) => {
      apolloHandler(
        event,
        context,
        (error: any, body: any): APIGatewayProxyCallback => (error ? reject(error) : resolve(body)),
      );
    });
  }

  return await runApolloHandlerAsPromise(event, context, apolloHandler);
};
