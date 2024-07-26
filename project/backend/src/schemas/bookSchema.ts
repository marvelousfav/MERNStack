// src/schemas/bookSchema.ts
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Book {
    id: ID!
    title: String!
    author: String!
    description: String!
    publicationDate: String!
  }

  type Query {
    getBooks: [Book]
    getBook(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, description: String!, publicationDate: String!): Book
    updateBook(id: ID!, title: String, author: String, description: String, publicationDate: String): Book
    deleteBook(id: ID!): Book
  }
`);

export default schema;
