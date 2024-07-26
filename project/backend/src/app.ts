// src/app.ts
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schemas/bookSchema';
import resolvers from './resolvers/bookResolver';
import connectDB from './utils/db';

const app = express();

connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
}));

export default app;
