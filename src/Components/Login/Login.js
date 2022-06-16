import './Login.css';

import LoginImg from '../.././Assests/booklist.jfif';
import Background from '../.././Assests/bimage.jpg';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { emailValidation, passwordValidation } from '../Validation.js'

function Login() {

    const navigateTo = useNavigate();

    const [getLogin, setLogin] = useState({
        libUsername: '',
        libPassword: ''
    });

    const [getLoginValidation, setLoginValidation] = useState({
        libUsername: '',
        libPassword: ''
    });

    const onLoginChangeHandler = (event) => {
        setLogin({
            ...getLogin, [event.target.name]: event.target.value
        })
    }

    const onLoginSubmit = (event) => {
        event.preventDefault();
        setLoginValidation({
            ...getLoginValidation, libUsername: !emailValidation(getLogin.libUsername) ? "please enter valid email / user name" : '',
            libPassword: !passwordValidation(getLogin.libPassword) ? "please enter correct password" : ''
        });

        if (emailValidation(getLogin.libUsername) && passwordValidation(getLogin.libPassword)) {
            
            let libUserName = sessionStorage.getItem('email');
            let libPassword = sessionStorage.getItem('password');
            if (libUserName === getLogin.libUsername && libPassword === getLogin.libPassword) {
                navigateTo('/dashboard');
            }
            else {
                setLoginValidation({
                    libUsername: 'User name does not match',
                    libPassword: 'Password does not match'
                });
            }

        }

    }
    return (
        <div>
            <div className="container">
                <div className="card bg-dark text-white">
                    <img className="card-img" src={Background} alt="backgruond" />
                    <div className="card-img-overlay">
                        <div className="row">
                            <div className="col-4">

                            </div>
                            <div className="col-4">
                                <form className="form-backround">
                                    <img className="card-img rounded login_img" src={LoginImg} alt="backgroundLogin" />
                                    <h1 className="login-label">LIBRARY</h1>
                                    <h3 className="login-label"> MANAGEMENT SYSTEM</h3>
                                    <div className="form-group">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><label className="login-label">User Name</label></td>
                                                    <td><input type="text" onChange={onLoginChangeHandler} name="libUsername" value={getLogin.libUsername} className="form-control" id="UserName" placeholder="User Name" />   </td>
                                                </tr>
                                                <tr>{getLoginValidation.libUsername && <td colSpan={3} className="alert alert-danger" role="alert">
                                                        {getLoginValidation.libUsername}
                                                    </td>}
                                                </tr>
                                                <tr>
                                                    <td><label className="login-label">Password</label></td>
                                                    <td><input type="password" onChange={onLoginChangeHandler} name="libPassword" value={getLogin.libPassword} className="form-control" id="password" placeholder="Password" /></td>
                                                </tr>
                                                <tr>{getLoginValidation.libPassword && <td colSpan={3} className="alert alert-danger" role="alert">
                                                        {getLoginValidation.libPassword}</td>}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <button type="submit" onClick={onLoginSubmit} className="btn btn-warning login-margin">Login</button>
                                </form>
                            </div>
                            <div className="col-4">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Login;