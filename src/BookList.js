import React from 'react';
import BookItem from './BookItem';

const BookList = (props) => {
  const { books, bookFormSubmission, handleDelete } = props;

  const bookFormSubmit = (formData) => {
    bookFormSubmission(formData);
  };

  return (
    <>
      <h1>Book List - {books.length}</h1>
      {books.map((book, idx) => {
        return <BookItem {...book} idx={idx} key={idx} bookFormSubmit={bookFormSubmit} handleDelete={handleDelete} />;
      })}
      <br />
    </>
  );
};
export default BookList;
