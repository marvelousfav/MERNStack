import { gql } from 'apollo-server-express';

const userSchema = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(userInput: UserInput): User
    login(email: String!, password: String!): AuthData!
  }
`;

export default userSchema;
