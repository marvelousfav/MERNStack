const Book = require('../models/Book'); // Assuming you have a Book model

const bookResolvers = {
    Query: {
        books: async () => {
            return await Book.find();
        },
        book: async (parent, args) => {
            return await Book.findById(args.id);
        }
    },
    Mutation: {
        addBook: async (parent, args) => {
            const newBook = new Book(args);
            return await newBook.save();
        },
        deleteBook: async (parent, args) => {
            return await Book.findByIdAndDelete(args.id);
        }
    }
};

module.exports = bookResolvers;

