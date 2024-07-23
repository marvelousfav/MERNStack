const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bookSchema = require('./schemas/bookSchema');
const userSchema = require('./schemas/userSchema');
const bookResolvers = require('./resolvers/bookResolvers');
const userResolvers = require('./resolvers/userResolvers');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use(
    '/graphql-books',
    graphqlHTTP({
        schema: bookSchema,
        rootValue: bookResolvers,
        graphiql: true,
    })
);

app.use(
    '/graphql-users',
    graphqlHTTP({
        schema: userSchema,
        rootValue: userResolvers,
        graphiql: true,
    })
);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server running on port ${port}`)))
    .catch(err => console.error(err));

