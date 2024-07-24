// src/app.ts
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schemas';
import resolvers from './resolvers';
import connectDB from './utils/db';
import protect from './middleware/authMiddleware';

const app = express();

connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
}));

app.use(protect);

export default app;
