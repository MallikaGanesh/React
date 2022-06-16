import './SignUp.css';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { usernameValidation, emailValidation, passwordValidation } from '../Validation.js';

function SignUp() {

  const navigateTo = useNavigate();

  const [getForm, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const [getValidation, setValidation] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const onChangeHandler = (event) => {
    setForm({
      ...getForm, [event.target.name]: event.target.value
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setValidation({
      ...getValidation, firstname: !usernameValidation(getForm.firstname) ? "First name is required. Enter only alphabets" : '',
      lastname: !usernameValidation(getForm.lastname) ? "Last name is required. Enter only alphabets" : '',
      email: !emailValidation(getForm.email) ? "please enter valid email" : '',
      password: !passwordValidation(getForm.password) ? "(length:5-10) must contain 1 uppercase, 1 number and 1 special character" : ''
    });

    if (usernameValidation(getForm.firstname) && usernameValidation(getForm.lastname) && emailValidation(getForm.email) && passwordValidation(getForm.password)) {
     // sessionStorage.setItem("firstname", getForm.firstname);
    //  sessionStorage.setItem("lastname", getForm.lastname);
      sessionStorage.setItem("email", getForm.email);
      sessionStorage.setItem("password", getForm.password);
      navigateTo('Login');
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
              <label>First Name</label>
              <input type="text" onChange={onChangeHandler} value={getForm.firstname} className="form-control" id="firstname" name="firstname" placeholder="First name" />
              {getValidation.firstname && <div className="alert alert-danger" role="alert">
                {getValidation.firstname}
              </div>}
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" onChange={onChangeHandler} value={getForm.lastname} className="form-control" id="lastname" name="lastname" placeholder="Last name" />
              {getValidation.lastname && <div className="alert alert-danger" role="alert">
                {getValidation.lastname}
              </div>}
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input type="email" onChange={onChangeHandler} value={getForm.email} className="form-control" id="email" name="email" placeholder="Enter email - your email will be a username" />
              {getValidation.email && <div className="alert alert-danger" role="alert">
                {getValidation.email}
              </div>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" onChange={onChangeHandler} value={getForm.password} className="form-control" id="password" name="password" placeholder="Enter Password" />
              {getValidation.password && <div className="alert alert-danger" role="alert">
                {getValidation.password}
              </div>}
            </div>
            <button onClick={onSubmitHandler} type="submit" className="btn btn-warning">Sign Up</button>
          </form>
        </div>
        <div className="col-4">

        </div>
      </div>

    </div>
  </div>);
}

export default SignUp;