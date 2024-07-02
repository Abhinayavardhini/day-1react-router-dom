import React from 'react';
import { Link } from 'react-router-dom';


function Signin() {
  return (
    <div className='App'>
    <form>
    <h2>Login</h2>
    <div>
    <label>Email:</label>
    <input></input>
    </div>
    <div>
    <label>Password:</label>
    <input></input>
     </div>
    <div>
    <button type='button'>Login</button>
    </div>
    <Link to="/dashboard">Login</Link>
    </form>
    <br></br>
    <Link to="/signup">Create Account</Link>
      
    </div>
  )
}

export default Signin
