const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const bookSchema = require('./schemas/bookSchema');
const userSchema = require('./schemas/userSchema');
const bookResolvers = require('./resolvers/bookResolvers');
const userResolvers = require('./resolvers/userResolvers');

const app = express();

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Schema and Resolvers
const schema = makeExecutableSchema({
  typeDefs: [bookSchema, userSchema],
  resolvers: [bookResolvers, userResolvers]
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

