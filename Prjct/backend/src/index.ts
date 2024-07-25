import { ApolloServer, ExpressContext } from 'apollo-server-express';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import { mergeSchemas } from '@graphql-tools/schema';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

// Your schema imports and other code here...

const server = new ApolloServer({
  schema: mergeSchemas({
    schemas: [/* your schemas here */],
  }),
  context: ({ req }: ExpressContext) => ({ req }),
});

server.applyMiddleware({ app });

mongoose
  .connect(process.env.MONGODB_URI || '', {
    useNewUrlParser: true, // Remove this line if unnecessary
    useUnifiedTopology: true, // Remove this line if unnecessary
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen({ port: 4000 }, () =>
      console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    );
  })
  .catch((err: any) => {
    console.error('Error connecting to MongoDB', err);
  });




