# AWS Lambda Apollo API

Running **GraphQL** playground in **AWS Lambda** with the help of **TypeScript** and **Serverless**.

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

Thanks to the help of this article and repository you can debug the function in VS Code:

## References

- [Apollo Development Guide for AWS Lambda](https://www.apollographql.com/docs/apollo-server/deployment/lambda/)

- [Debugging TypeScript AWS Lambda with VS Code and Serverless](https://medium.com/@enrico.portolan/debugging-typescript-aws-lambda-with-vscode-and-serverless-967f2a201fab)
