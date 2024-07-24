const { gql } = require('apollo-server-express');

const bookSchema = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    description: String!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, description: String!): Book
  }
`;

module.exports = bookSchema;


