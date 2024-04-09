const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
  }

  type Book {
    id: ID!
    title: String!
    author: String!
  }
`;

module.exports = typeDefs;
