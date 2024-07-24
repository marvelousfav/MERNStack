// src/schemas/userSchema.ts
import { buildSchema } from 'graphql';

const userSchema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type AuthData {
    userId: ID!
    token: String!
  }

  type Query {
    login(email: String!, password: String!): AuthData!
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): User!
  }
`);

export default userSchema;
