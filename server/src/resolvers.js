let books = [
  { id: "1", title: "Book 1", author: "Author 1" },
  { id: "2", title: "Book 2", author: "Author 2" },
];

const resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find((book) => book.id === id),
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = { id: String(books.length + 1), title, author };
      books.push(newBook);
      return newBook;
    },
  },
};

module.exports = resolvers;
