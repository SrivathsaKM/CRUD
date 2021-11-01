import React, { useState } from 'react';
import BookForm from './BookForm';

const BookItem = (props) => {
  const { id, bookName, authorName, colour, idx, bookFormSubmit, handleDelete } = props;

  const [status, setStatus] = useState(false);

  const handleBooks = () => {
    setStatus(!status);
  };
  return (
    <div>
      <p></p>

      {status ? (
        <div>
          <BookForm editId={id} editBookName={bookName} editAuthorName={authorName} editColour={colour} bookFormSubmit={bookFormSubmit} handleBooks={handleBooks} />
          <button onClick={handleBooks}>cancel</button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Book - {idx + 1}</strong> &nbsp;
            {bookName} - {authorName} - {colour} &nbsp;
            <button onClick={handleBooks}>edit</button> &nbsp;
            <button
              onClick={() => {
                handleDelete(id);
              }}>
              delete
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default BookItem;
