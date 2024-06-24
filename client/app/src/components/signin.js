import React, { useState } from 'react';
import './signin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let validationErrors = {};
    let valid = true;

    if (!name) {
      validationErrors.name = 'Name is required';
      valid = false;
    }
    if (!email) {
      validationErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email address is invalid';
      valid = false;
    }
    if (!password) {
      validationErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
      valid = false;
    } else if (!/\d/.test(password)) {
      validationErrors.password = 'Password must contain at least one number';
      valid = false;
    } else if (!/[!@#$%^&*_]/.test(password)) {
      validationErrors.password = 'Password must contain at least one special character';
      valid = false;
    }
    if (!confirmPassword) {
      validationErrors.confirmPassword = 'Confirm Password is required';
      valid = false;
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(validationErrors);
    return valid;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:5000/signup', {
          name,
          email,
          password,
          confirmPassword,
        });
        setMessage(response.data.message);
      } catch (error) {
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="nav">
        <div className="navBar">
          <ol>
            <div className="navBar-left">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/recipe">Recipes</Link></li>
              <li><Link to="/userRecipe">Add Yours</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">SignUp</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </div>
            <div className="navBar-right">
              <li id="search"></li>
                 {/*<li><a href="www.google.com">Sign in</a></li>*/}
                 <button className="button1"><Link to="/recipe">TRY RECIPE</Link></button>
              <button className="button2"><Link to="/signup">GET STARTED</Link></button>
            </div>
          </ol>
        </div>
      </div>
      <div className='bottom'>
        <div className='login' style={{ display: "flex", justify: "spacebetween", alignItems: "center" }}>
          <div className='loginImage'>
            <img src="https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg" alt="yummy" className='img1'></img>
          </div>
          <div className='loginform'>
            <h3 style={{ marginLeft: "10px", marginBottom: "20px", fontSize: "40px" }}>SignUp</h3>
            <p>Find and share your recipe you like</p>
            <form onSubmit={handleSignup}>
              <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
              {errors.name && <p className="error">{errors.name}</p>}
              <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
              {errors.email && <p className="error">{errors.email}</p>}
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
              {errors.password && <p className="error">{errors.password}</p>}
              <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              <Link to="/login"><button className='loginB'>Login</button></Link>
              <button className='siginB' type='submit'>Signup</button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
