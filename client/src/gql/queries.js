// client/src/gql/queries.js

import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query {
    books {
      id
      title
      author
    }
  }
`;
