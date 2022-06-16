import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <a className="navbar-brand" href="#"><i className="fa fa-book" aria-hidden="true"></i></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to ="/Dashboard">Home</Link>                        
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About Library</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">Rules & Regulations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">Price Card</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-warning my-2 my-sm-0 submit-login" type="submit"><Link to="Login">Login</Link></button>
                    <button className="btn btn-warning my-2 my-sm-0" type="submit"><Link to="">Sign Up</Link></button>
                </form>
            </div>
        </nav>
    </div>);
}

export default Header;
