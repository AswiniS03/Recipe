import React from 'react';
import { useState} from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
function Login()
{ 
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  //console.log(email+"\n"+password);

  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const { user } = response.data;
    localStorage.setItem('userId', user.id);
      alert(response.data.message);
      navigate('/');// Redirect to profile page 
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  
  return(
    <div >
        <div className="nav">
      <div className="navBar">
        <ol>
          <div className="navBar-left">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipe">Receipees</Link></li>
          <li><Link to="/userRecipe">Add Your's</Link></li>   
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          </div>
          <div className="navBar-right">
              
                <li id="search"  ></li>
                
                 {/*<li><a href="www.google.com">Sign in</a></li>*/}
                 <button className="button1"><Link to="/recipe">
                  TRY RECEIPE
                  </Link>
                 </button>
                 <button className="button2"><Link to="/signup">
                  GET STARTED
                  </Link>
                 </button>
                 
          </div>
        </ol>
      </div>
      </div>
      <div className='bottom'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <body>
          
          <div className='login'>
          <div className='loginImage'>
        <img src="https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg" alt="yummy" className='img1'></img>
        </div>
        <div className='loginform'>
            <h3 style={{marginLeft:"10px",marginBottom:"20px",fontSize:"50px" }}>Login</h3>
            
            <p>Find and share your receipe you like</p>
            <form onSubmit={handleLogin}>
            <input type="email" placeholder='Email'value={email} onChange={(e)=>setEmail(e.target.value)} required/><br></br>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/><br></br>
            {/*<input type="button" value={"Login"} className='logButton'/>
            <input type="button" value={"Sigin"} className='sigButton'/>*/}
            <button className='loginB' type='submit'>Login</button>
            <Link to="/signup"><button className='siginB'>Signup</button></Link>
            </form>
            
        </div>
        </div>
        
        
        </body>
    </div>
    </div>
  );

}
export default Login;
