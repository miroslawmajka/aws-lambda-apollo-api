import { gql } from 'apollo-server-lambda';

export default gql`
  type Query {
    hello: String
    nodeVersion: String
  }
`;
