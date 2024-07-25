import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import { mergeSchemas } from '@graphql-tools/schema';
import userSchema from './schemas/userSchema';
import projectSchema from './schemas/projectSchema';
import taskSchema from './schemas/taskSchema';
import userResolvers from './resolvers/userResolvers';
import projectResolvers from './resolvers/projectResolvers';
import taskResolvers from './resolvers/taskResolvers';
import { authMiddleware } from './utils/auth';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(authMiddleware);

const server = new ApolloServer({
    schema: mergeSchemas({
        schemas: [userSchema, projectSchema, taskSchema],
        resolvers: [userResolvers, projectResolvers, taskResolvers]
    }),
    context: ({ req }) => ({ req })
});

await server.start();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

mongoose
    .connect(process.env.MONGODB_URI as string, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error(err);
    });
