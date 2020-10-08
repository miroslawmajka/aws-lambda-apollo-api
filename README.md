# Lambda GraphQL

Running GraphQL playground in AWS Lambda.

Using the [Apollo Guide](https://www.apollographql.com/docs/apollo-server/deployment/lambda/) for setting this up.

Deployments done with [Serverless](https://www.serverless.com/).

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm start
```

3. Run deployment to AWS:

```bash
npm run deploy
```

4. Navigate to the GraphQL Playground available at https://RANDOM-ID.execute-api.eu-west-1.amazonaws.com/dev/graphql.
