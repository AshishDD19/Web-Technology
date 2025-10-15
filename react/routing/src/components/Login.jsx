import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
        <div>
            <label htmlFor="uname">Username</label>
            <input type="text" name="uname" id="uname" />
            <br /><br />
            <label htmlFor="pass">Password</label>
            <input type="password" name="pass" id="pass" />

            <br />
            <Link to="/home"><button>Login</button></Link>
            <Link to="/signup"><button>Signup</button></Link>
        </div>
  )
}

export default Login
