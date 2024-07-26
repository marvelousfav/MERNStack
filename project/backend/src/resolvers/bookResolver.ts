// src/resolvers/bookResolver.ts
import Book, { IBook } from '../models/Book';

const resolvers = {
    getBooks: async () => await Book.find(),
    getBook: async (args: { id: string }) => await Book.findById(args.id),
    addBook: async (args: IBook) => {
        const book = new Book(args);
        return await book.save();
    },
    updateBook: async (args: IBook) => {
        return await Book.findByIdAndUpdate(args.id, args, { new: true });
    },
    deleteBook: async (args: { id: string }) => {
        return await Book.findByIdAndDelete(args.id);
    },
};

export default resolvers;
