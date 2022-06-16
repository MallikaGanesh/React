import './AddBook.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { bookIdnoOfBooksValidation, bookDescValidation, bookTitleAuthorValidation } from '../Validation.js';
import { clear } from '@testing-library/user-event/dist/clear';
import axios from 'axios';

function AddBook() {

  const navigateTo = useNavigate();

  const [getBook, setBook] = useState({
    bookId: '',
    bookTitle: '',
    bookDesc: '',
    authorName: '',
    noOfBooks: ''
  })

  const [getBookValidation, setBookValidation] = useState({
    bookId: '',
    bookTitle: '',
    bookDesc: '',
    authorName: '',
    noOfBooks: ''
  })

  const onAddBookChangeHandler = (event) => {
    setBook({
      ...getBook, [event.target.name]: event.target.value
    })
  }

  const onAddBookClickHandler = (event) => {
    event.preventDefault();

    setBookValidation({
      ...getBookValidation, bookId: !bookIdnoOfBooksValidation(getBook.bookId) ? "Enter Book ID. Numeric values only" : '',
      bookTitle: !bookTitleAuthorValidation(getBook.bookTitle) ? 'Enter Book Title.' : '',
      bookDesc: !bookDescValidation(getBook.bookDesc) ? 'Enter book Description' : '',
      authorName: !bookTitleAuthorValidation(getBook.authorName) ? 'Enter Author name' : '',
      noOfBooks: !bookIdnoOfBooksValidation(getBook.noOfBooks) ? 'Enter No. of books' : ''
    });

    if (bookIdnoOfBooksValidation(getBook.bookId) && bookTitleAuthorValidation(getBook.bookTitle) && bookDescValidation(getBook.bookDesc) && bookTitleAuthorValidation(getBook.authorName) && bookIdnoOfBooksValidation(getBook.noOfBooks)) {

      let bookDetails=[];

      axios.post('http://localhost:3000/books',{
        bookTitle:getBook.bookTitle,
        bookDesc:getBook.bookDesc,
        authorName: getBook.authorName,
        noOfBooks: getBook.noOfBooks
      }).then(()=>{
        navigateTo('/Dashboard');
      }).catch(()=>{

      })
      // if (sessionStorage.getItem("bookDetails")) {
      //   let currentBookDetails = JSON.parse(sessionStorage.getItem("bookDetails"));
      //   bookDetails.push(...currentBookDetails);
      //   bookDetails.push({ ...getBook });
      //   sessionStorage.setItem("bookDetails", JSON.stringify(bookDetails))
      // }
      // else {
      //   bookDetails.push({ ...getBook });
      //   sessionStorage.setItem("bookDetails", JSON.stringify(bookDetails))
      // }
       navigateTo('/Dashboard');
    }
  }

  return (<div>
    <div className="container">
      <div className="row">
        <div className="col-4">

        </div>
        <div className="col-4">
          <form>
            <div className="form-group">
              <label>Book ID</label>
              <input type="text" name="bookId" onChange={onAddBookChangeHandler} value={getBook.bookId} className="form-control" id="bookId" placeholder="Book ID" />
              {getBookValidation.bookId && <div className="alert alert-danger" role="alert">
                {getBookValidation.bookId}
              </div>}
            </div>
            <div className="form-group">
              <label>Book Title</label>
              <input type="text" name="bookTitle" onChange={onAddBookChangeHandler} value={getBook.bookTitle} className="form-control" id="bookTitle" placeholder="Book Title" />
              {getBookValidation.bookTitle && <div className="alert alert-danger" role="alert">
                {getBookValidation.bookTitle}
              </div>}
            </div>
            <div className="form-group">
              <label>Book Description</label>
              <input type="text" name="bookDesc" onChange={onAddBookChangeHandler} value={getBook.bookDesc} className="form-control" id="bookDesc" placeholder="Book Description" />
              {getBookValidation.bookDesc && <div className="alert alert-danger" role="alert">
                {getBookValidation.bookDesc}
              </div>}
            </div>
            <div className="form-group">
              <label>Author Name</label>
              <input type="text" name="authorName" onChange={onAddBookChangeHandler} value={getBook.authorName} className="form-control" id="authorName " placeholder="Author Name " />
              {getBookValidation.authorName && <div className="alert alert-danger" role="alert">
                {getBookValidation.authorName}
              </div>}
            </div>
            <div className="form-group">
              <label>Number of book available</label>
              <input type="number" name="noOfBooks" onChange={onAddBookChangeHandler} value={getBook.noOfBooks} className="form-control" id="noOfBooks" placeholder="Number of book available" />
              {getBookValidation.noOfBooks && <div className="alert alert-danger" role="alert">
                {getBookValidation.noOfBooks}
              </div>}
            </div>
            <button type="submit" onClick={onAddBookClickHandler} className="btn btn-warning">Add Book</button>
          </form>
        </div>
        <div className="col-4">

        </div>
      </div>

    </div>
  </div>);
}

export default AddBook;