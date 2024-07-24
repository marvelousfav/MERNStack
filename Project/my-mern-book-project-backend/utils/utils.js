// utils/utils.js
const faker = require('faker');

const generateBooks = (count) => {
    const books = [];
    for (let i = 0; i < count; i++) {
        books.push({
            id: String(i + 1),
            title: faker.lorem.words(3),
            author: faker.name.findName(),
            description: faker.lorem.sentences(2),
        });
    }
    return books;
};

module.exports = generateBooks;
