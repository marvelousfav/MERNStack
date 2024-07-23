require('dotenv').config();
console.log('MONGODB_URI:', process.env.MONGODB_URI); // Log the MongoDB URI to verify it's being loaded

const express = require('express');
const mongoose = require('mongoose');
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

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});


