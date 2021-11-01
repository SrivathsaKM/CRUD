import React, { useState, useEffect } from 'react';

const BookForm = (props) => {
  const { bookFormSubmit, editId, editBookName, editAuthorName, editColour, handleBooks } = props;

  const [id] = useState(editId ? editId : Number(new Date()));
  const [bookName, setBookName] = useState(editBookName ? editBookName : '');
  const [authorName, setAuthorName] = useState(editAuthorName ? editAuthorName : '');
  const [colour, setColour] = useState(editColour ? editColour : '');
  const [showRed, setShowRed] = useState(false);
  const [showOthers, setShowOthers] = useState(false);

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
    setShowRed(false);
    setShowOthers(false);
  };

  useEffect(() => {
    if (editColour == 'red') {
      setShowOthers(true);
      setShowRed(true);
    } else {
      setShowOthers(true);
      setShowRed(false);
    }
  }, []);

  return (
    <>
      <br />
      <form onSubmit={handleFormSubmit}>
        {showOthers ? (
          showRed ? (
            <div>
              <label>Book Name: </label>
              <input type='text' value={bookName} onChange={(e) => setBookName(e.target.value)} />
              <br /> <br />
            </div>
          ) : (
            <div>
              <label>Author Name: </label>
              <input type='text' value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
            </div>
          )
        ) : null}
        <br /> <br />
        <p>Colour :</p>
        <div>
          <input
            type='radio'
            value='red'
            checked={colour === 'red'}
            onChange={(e) => {
              setColour(e.target.value);
              setShowOthers(true);
              setShowRed(true);
            }}
          />
          Red
        </div>
        <div>
          <input
            type='radio'
            value='green'
            checked={colour === 'green'}
            onChange={(e) => {
              setColour(e.target.value);
              setShowOthers(true);
              setShowRed(false);
            }}
          />
          Green
        </div>
        <div>
          <input
            type='radio'
            value='blue'
            checked={colour === 'blue'}
            onChange={(e) => {
              setColour(e.target.value);
              setShowOthers(true);
              setShowRed(false);
            }}
          />{' '}
          Blue
        </div>
        <br /> <br />
        <button type='submit'>save</button>
      </form>
      <br />
    </>
  );
};
export default BookForm;
