const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Book {
    id: ID!
    title: String!
    author: String!
    description: String!
    publishedYear: Int!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    createBook(title: String!, author: String!, description: String!, publishedYear: Int!): Book
    updateBook(id: ID!, title: String, author: String, description: String, publishedYear: Int): Book
    deleteBook(id: ID!): Book
  }
`);

module.exports = schema;
