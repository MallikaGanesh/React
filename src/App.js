// import logo from './logo.svg';
import './App.css';

import './Assests/font-awesome/css/font-awesome.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import About from './Components/About/About';
import Dashboard from './Components/Dashboard/Dashboard';
import AddBook from './Components/AddBook/AddBook';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='' element={<SignUp/>} />
          <Route path='Login' element={<Login/>} />
          <Route path='About' element={<About/>} />
          <Route path='Dashboard' element={<Dashboard/>} />
          <Route path='AddBook' element={<AddBook/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
