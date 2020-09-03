# Lambda GraphQL

Running GraphQL playground in AWS Lambda.

Using the [Apollo Guide](https://www.apollographql.com/docs/apollo-server/deployment/lambda/) for setting this up.

Deployments done with [Serverless](https://www.serverless.com/).

## Setup

1. Install **Serverless**:

```bash
npm install -g serverless
```

2. Install dependencies:

```bash
npm install
```

3. Run deployment to AWS:

```bash
serverless deploy
```

4. Navigate to the GraphQL Playground available at https://RANDOM-ID.execute-api.eu-west-1.amazonaws.com/dev/graphql.
