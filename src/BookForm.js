import React, { useState } from 'react';

const BookForm = (props) => {
  const { bookFormSubmit, editId, editBookName, editAuthorName, editColour, handleBooks } = props;

  const [id] = useState(editId ? editId : Number(new Date()));
  const [bookName, setBookName] = useState(editBookName ? editBookName : '');
  const [authorName, setAuthorName] = useState(editAuthorName ? editAuthorName : '');
  const [colour, setColour] = useState(editColour ? editColour : '');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: id,
      bookName: bookName,
      authorName: authorName,
      colour: colour,
    };
    // console.log(formData);
    if (handleBooks) {
      handleBooks();
    }
    bookFormSubmit(formData);
    setBookName('');
    setAuthorName('');
    setColour('');
  };

  return (
    <>
      <br />
      <form onSubmit={handleFormSubmit}>
        <label>Book Name: </label>
        <input type='text' value={bookName} onChange={(e) => setBookName(e.target.value)} />
        <br /> <br />
        <label>Author Name: </label>
        <input type='text' value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
        <br /> <br />
        <p>Colour :</p>
        <div>
          <input type='radio' value='red' checked={colour === 'red'} onChange={(e) => setColour(e.target.value)} /> Red
        </div>
        <div>
          <input type='radio' value='green' checked={colour === 'green'} onChange={(e) => setColour(e.target.value)} /> Green
        </div>
        <div>
          <input type='radio' value='blue' checked={colour === 'blue'} onChange={(e) => setColour(e.target.value)} /> Blue
        </div>
        <br /> <br />
        <button type='submit'>save</button>
      </form>
      <br />
    </>
  );
};
export default BookForm;
