const books = [
    {
        id: '1',
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        description: 'A young boy discovers he is a wizard and attends a magical school.'  // Example description
    },
    // Add more books as needed
];

const resolvers = {
    Query: {
        books: async () => await Book.find(),
        book: async (parent, { id }) => await Book.findById(id),
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


