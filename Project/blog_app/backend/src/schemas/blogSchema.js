const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Blog {
    id: ID!
    title: String!
    content: String!
    author: String!
  }

  type Query {
    blogs: [Blog]
  }

  type Mutation {
    createBlog(title: String!, content: String!, author: String!): Blog
  }
`);

module.exports = schema;
