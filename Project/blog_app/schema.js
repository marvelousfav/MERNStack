// schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    token: String
  }

  type Blog {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    blogs: [Blog!]!
    blog(id: ID!): Blog
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    createBlog(title: String!, content: String!): Blog
    updateBlog(id: ID!, title: String!, content: String!): Blog
    deleteBlog(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
