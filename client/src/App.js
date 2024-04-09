// client/src/App.js

import React from "react";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";

function App() {
  return (
    <div>
      <h1>My Bookshelf</h1>
      <BookList />
      <AddBookForm />
    </div>
  );
}

export default App;
