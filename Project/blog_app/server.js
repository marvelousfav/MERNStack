// server.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen({ port: process.env.PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  ))
  .catch(err => console.error(err));
