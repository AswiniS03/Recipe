import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//import allReceipe from './components/allReceipe';
//import { useState } from 'react';
//import './App.css';
import Home from './components/home';
import Login from './components/login';
import SignIn from './components/signin';
import PostReceipe from './components/yourReciepe';
import Profile from './components/profile';
import ReceipeAll from './components/allReceipe';
function App()
{ 
  /*const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  //console.log(email+"\n"+password);
  return(
    <div >
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <body>
          
          <div className='login'>
          <div className='loginImage'>
        <img src="https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg" alt="yummy" className='img1'></img>
        </div>
        <div className='loginform'>
            <h3 style={{marginLeft:"10px",marginBottom:"20px",fontSize:"50px" }}>Login</h3>
            
            <p>Find and share your receipe you like</p>
            <input type="email" placeholder='Email'value={email} onChange={(e)=>setEmail(e.target.value)} required/><br></br>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/><br></br>
            {/*<input type="button" value={"Login"} className='logButton'/>
            <input type="button" value={"Sigin"} className='sigButton'/>*/
           /* <button className='loginB'>Login</button>
            <button className='siginB'>Signup</button>
            
        </div>
        </div>
        
        {/*<div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <label for="floatingPassword">Password</label>
        </div>
        </body>
    </div>
  );*/
  /*return (
    <>
    <Home/>
    </>
  );*/
  /*return (
    <>
    <Login/>
    </>
  )*/
 return(
  <>
  {/*<SignIn/>*/}
  {/*<PostReceipe/>*/}
  {/*<Profile/>*/}
  {/*<ReceipeAll/>*/}
  {/*<Home/>*/}
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/userRecipe" element={<PostReceipe/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<SignIn/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/recipe" element={<ReceipeAll/>}/>
    </Routes>
  </Router>
  </>
 );


}
export default App;
