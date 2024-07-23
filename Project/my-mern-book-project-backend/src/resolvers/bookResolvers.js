const Book = require('../models/Book');

const resolvers = {
    books: async () => {
        return await Book.find();
    },
    book: async ({ id }) => {
        return await Book.findById(id);
    },
    createBook: async ({ title, author, description, publishedYear }) => {
        const book = new Book({ title, author, description, publishedYear });
        await book.save();
        return book;
    },
    updateBook: async ({ id, title, author, description, publishedYear }) => {
        const book = await Book.findById(id);
        if (title) book.title = title;
        if (author) book.author = author;
        if (description) book.description = description;
        if (publishedYear) book.publishedYear = publishedYear;
        await book.save();
        return book;
    },
    deleteBook: async ({ id }) => {
        const book = await Book.findById(id);
        await book.remove();
        return book;
    },
};

module.exports = resolvers;
