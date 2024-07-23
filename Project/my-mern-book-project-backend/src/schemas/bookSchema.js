//bookSchema.js

const { gql } = require('apollo-server-express');

const bookSchema = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    publishedDate: String
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, publishedDate: String): Book
    deleteBook(id: ID!): Book
  }
`;

module.exports = bookSchema;

