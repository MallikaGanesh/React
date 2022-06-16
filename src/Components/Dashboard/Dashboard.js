import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Dashboard = () => {

    const navigateTo = useNavigate();

    const [getList, setList] = useState([]);

    const [getBookSearch, setBookSearch] = useState([]);

    const [getIndex, setIndex] = useState(-1);

    const [getBook, setBook] = useState({
        bookTitle: '',
        bookDesc: '',
        authorName: '',
        noOfBooks: ''
    })

    useEffect(() => {
        axios.get('http://localhost:3000/books').then((response) => {
            console.log(response.data);
            setList(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])


    const onSubmitHandler = () => {
        navigateTo('/AddBook')
    }

    const onDeleteHandler = (index) => {
        let bookDetails = [...getList];
        let id = bookDetails[index].id;
        axios.delete('http://localhost:3000/books/' + id).then(() => {
            bookDetails.splice(index, 1);
            setList(bookDetails);
        }
        ).catch((event) => {

        })
    }

    const onChangeHandler = (event) => {
        setBook({
            ...getBook, [event.target.name]: event.target.value
        })
    }

    const onSearchChangeHandler = (event) => {
        setBookSearch(event.target.value);
    }

    const onClickFilterSearch = (event) => {
        event.preventDefault();
        let details = getList.filter((obj) => {
            return obj.bookTitle === getBookSearch;
            // console.log(obj.bookTitle.match(getBookSearch));
            // return obj.bookTitle.match(getBookSearch);
        })
        setList(details);
    }

    const onClickResetFilter = (event) => {
        event.preventDefault();
        setBookSearch('');        axios.get('http://localhost:3000/books').then((response) => {
            console.log(response.data);
            setList(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    const onEditHandler = (index) => {
        setBook({
            bookTitle: getList[index].bookTitle,
            bookDesc: getList[index].bookDesc,
            authorName: getList[index].authorName,
            noOfBooks: getList[index].noOfBooks
        })
        setIndex(index);
    }

    const onEditSubmitHandler = (event) => {
        event.preventDefault();
        let bookDetails = [...getList];
        let id = bookDetails[getIndex].id;
        axios.patch('http://localhost:3000/books/'+ id, {
            bookTitle: getBook.bookTitle,
            bookDesc: getBook.bookDesc,
            authorName: getBook.authorName,
            noOfBooks: getBook.noOfBooks
        }).then(() => {
            
            setList(bookDetails);
            bookDetails[getIndex].bookTitle = getBook.bookTitle;
            bookDetails[getIndex].bookDesc = getBook.bookDesc;
            bookDetails[getIndex].authorName = getBook.authorName;
            bookDetails[getIndex].noOfBooks = getBook.noOfBooks;
            setList(bookDetails);

        }).catch((error) => {
            console.log(error)
        })


        // bookDetails[getIndex].bookTitle = getBook.bookTitle;
        // bookDetails[getIndex].bookDesc = getBook.bookDesc;
        // bookDetails[getIndex].authorName = getBook.authorName;
        // bookDetails[getIndex].noOfBooks = getBook.noOfBooks;
        // setList(bookDetails);
        // sessionStorage.setItem('bookDetails', JSON.stringify(bookDetails));
    }

    return (<div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <form>
                        <h5>Search Book</h5>
                        <div className="form-group">
                            <div>
                                <label>Book Title:</label>
                                <input type="text" value={getBookSearch} onChange={onSearchChangeHandler} className="form-control" id="BookTitle" />
                            </div>
                            <br />
                            <button value={getBookSearch} onClick={onClickFilterSearch} type="submit" className="btn btn-warning  search-button">Search</button>
                            <button onClick={onClickResetFilter} type="submit" className="btn btn-warning  search-button">Reset</button>
                        </div>
                    </form>
                </div>
                <div className="col-7"></div>
                <div className="col-2">
                    <button type="submit" onClick={onSubmitHandler} className="btn btn-warning">Add Book</button>
                </div>

            </div>

            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Book ID</th>
                                <th scope="col">Book Title</th>
                                <th scope="col">Book Description</th>
                                <th scope="col">Author Name</th>
                                <th scope="col">Number of book available </th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getList.map((obj, index) => {
                                return (<tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{obj.bookTitle}</td>
                                    <td>{obj.bookDesc}</td>
                                    <td>{obj.authorName}</td>
                                    <td>{obj.noOfBooks}</td>
                                    <td><i onClick={() => onEditHandler(index)} data-toggle="modal" data-target="#edit" className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                                    <td><i onClick={() => onDeleteHandler(index)} className="fa fa-trash" aria-hidden="true"></i></td>
                                </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="modal fade" id="edit" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Update Book Details</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Book Title</label>
                            <input type="text" name="bookTitle" value={getBook.bookTitle} onChange={onChangeHandler} className="form-control" id="bookTitle" placeholder="Book Title" />
                        </div>
                        <div className="form-group">
                            <label>Book Description</label>
                            <input type="text" name="bookDesc" value={getBook.bookDesc} onChange={onChangeHandler} className="form-control" id="bookDesc" placeholder="Book Description" />
                        </div>
                        <div className="form-group">
                            <label>Author Name</label>
                            <input type="text" name="authorName" value={getBook.authorName} onChange={onChangeHandler} className="form-control" id="authorName " placeholder="Author Name " />
                        </div>
                        <div className="form-group">
                            <label>Number of book available</label>
                            <input type="number" name="noOfBooks" value={getBook.noOfBooks} onChange={onChangeHandler} className="form-control" id="noOfBooks" placeholder="Number of book available" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-dismiss="modal" onClick={onEditSubmitHandler} className="btn btn-warning">Update</button>
                    </div>
                </div>
            </div>
        </div>

    </div>);
}

export default Dashboard;