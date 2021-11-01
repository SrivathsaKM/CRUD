import React from 'react';
import BookForm from './BookForm';

const BookFormContainer = (props) => {
  const { bookFormSubmit, handleBooks } = props;
  return (
    <div style={{ border: '2px solid red' }}>
      <BookForm bookFormSubmit={bookFormSubmit} handleBooks={handleBooks} />
    </div>
  );
};
export default BookFormContainer;
