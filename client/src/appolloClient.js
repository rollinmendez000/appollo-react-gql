// client/src/apolloClient.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_SERVER_URI,
  cache: new InMemoryCache(),
});

export default apolloClient;
