import React, { useState } from 'react';
import RollDice from './components/RollDice';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import "./App.css";
import Home from './routes/Home';
import Signup from './routes/Signup';
import Login from './routes/Login';
import Logout from './routes/Logout';

function App() {
  const sides = ['one', 'two', 'three', 'four', 'five', 'six'];
  const [isSignUp, setIsSignUp] = useState(false);
  const[isLogIn, setIsLogIn] = useState(false);

  return (
    <Router>
      <nav className='nav'>
        <NavLink className="nav-item" to="/">Home</NavLink>
        {
          !is ? (
            <>
              <NavLink className="nav-item" to="/Signup">SignUp</NavLink>
              <NavLink className="nav-item" to="/Login">Login</NavLink>
            </>
          ) : (
            <>
                <NavLink className="nav-item" to="/Logout">Logout</NavLink>
                <NavLink className="nav-item" to="/Signup">SignUp</NavLink>
                <NavLink className="nav-item" to="/Login">Login</NavLink>
              </>
            )
        }

      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Signup' element={<Signup setIsSignIn={setIsSignUp} />} />
        <Route path='/Login' element={<Login  setIsLogIn={setIsLogIn} />} />
        <Route path='/Logout' element={<Logout  />} />
        <Route path='/StartGame' element={<RollDice sides={sides} />} />
      </Routes>
    </Router>
  );
}

export default App;
