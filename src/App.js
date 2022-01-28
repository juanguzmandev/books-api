import React, {useState, useEffect} from 'react';

function App() {

  const [books, setBooks] = React.useState();

  useEffect(() => {

    fetch('https://api.itbook.store/1.0/new')
    .then(response => response.json())
    .then(data => setBooks(data.books));

    console.log(books);

  });
  
  return (
    <React.Fragment>
      {books.map(book => {
        return (
          <>
          <h3>Title: {book.title}</h3>
          <h4>Price: {book.price}</h4>
          <h4>Image: {book.image}</h4>
          <br/>
          </>
        )
      })}
    </React.Fragment>
  )
}

export default App;

