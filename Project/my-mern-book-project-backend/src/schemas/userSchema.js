const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    username: String!
    password: String!
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  type Query {
    login(username: String!, password: String!): AuthData
  }

  type Mutation {
    createUser(username: String!, password: String!): User
  }
`);

module.exports = schema;
