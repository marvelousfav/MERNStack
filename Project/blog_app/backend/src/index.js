// Import necessary packages
const mongoose = require('mongoose');
require('dotenv').config();

// Get the MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URI;

// Ensure the URI is defined
if (!mongoURI) {
    console.error('MongoDB URI is not defined. Please set the MONGO_URI environment variable.');
    process.exit(1);
}

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

// Your existing code to start the server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
