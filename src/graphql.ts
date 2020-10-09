import { ApolloServer, gql } from 'apollo-server-lambda';

// TODO: refactor the type definitions and the resolvers out of here
const typeDefs = gql`
  type Query {
    hello: String
    nodeVersion: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    nodeVersion: () => process.version
  }
};

const server = new ApolloServer({
  typeDefs,
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

// TODO: refactor this to use async/await
async function runApollo(event: any, context: any, apollo: any) {
  return new Promise((resolve, reject) => {
    const callback = (error: any, body: any) => (error ? reject(error) : resolve(body));

    apollo(event, context, callback);
  });
}

exports.graphqlHandler = async (event: any, context: any, cb: any) => {
  const apollo = server.createHandler({
    cors: {
      origin: '*',
      methods: 'POST',
      allowedHeaders: ['Content-Type', 'Origin', 'Accept']
    }
  });

  try {
    const response = await runApollo(event, context, apollo);

    return response;
  } catch (err) {
    cb(err, null);
  }
};
