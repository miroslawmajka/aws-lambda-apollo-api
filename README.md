# AWS Lambda Apollo API

Running GraphQL playground in AWS Lambda.

Using the [Apollo Guide](https://www.apollographql.com/docs/apollo-server/deployment/lambda/) for setting this up.

Deployments done with [Serverless](https://www.serverless.com/).

## Setup

1. Install dependencies and run the boilerplate query:

```bash
npm install
npm start
```

2. You can now edit the `.graphql-data.json` file to adjust the query or mutation. 

3. When ready just re-run the `npm start` command to test out the Lambda function locally.

## AWS Deployment

1. Run deployment to AWS:

```bash
npm run deploy
```

2. Navigate to the GraphQL Playground available at https://RANDOM-ID.execute-api.eu-west-1.amazonaws.com/dev/graphql.

3. Run clean up the AWS application stack run:

```bash
npm run remove
```

## Development

You can run `npm run invoke-watch` to have the **Serverless** framwork monitor for file changes and re-run the mock Lambda environment.

### TODO

Figure out VS Code debugging when TypeScript is involved with Serverless.