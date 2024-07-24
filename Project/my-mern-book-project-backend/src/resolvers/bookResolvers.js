// src/resolvers/bookResolver.js
const generateBooks = require('../../utils/utils');

const books = generateBooks(100); // Generate 20 books

const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (parent, { title, author, description }) => {
      const newBook = {
        id: String(books.length + 1),
        title,
        author,
        description,
      };
      books.push(newBook);
      return newBook;
    },
  },
};

module.exports = resolvers;

  

