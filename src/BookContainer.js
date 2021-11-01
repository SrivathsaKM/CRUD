import React, { useState, useEffect } from 'react';
import BookFormContainer from './BookFormContainer';
import BookList from './BookList';

const BookContainer = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(result);
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const bookFormSubmit = (formData) => {
    //console.log('book', formData);
    const result = [...books, formData];
    setBooks(result);
  };

  const handleDelete = (id) => {
    //alert(id);
    const confirm = window.confirm('Aru u sure?');
    if (confirm) {
      const result = books.filter((ele) => ele.id !== id);
      setBooks(result);
    }
  };

  const bookFormSubmission = (formData) => {
    console.log(formData);
    const result = books.map((book) => {
      return book.id === formData.id ? { ...book, ...formData } : { ...book };
    });
    if (result) {
    }
    setBooks(result);
  };

  return (
    <>
      <h3>BookContainer</h3>
      {Object.keys(books).length > 0 && <BookList books={books} bookFormSubmission={bookFormSubmission} handleDelete={handleDelete} />}
      <BookFormContainer bookFormSubmit={bookFormSubmit} />
    </>
  );
};

export default BookContainer;
