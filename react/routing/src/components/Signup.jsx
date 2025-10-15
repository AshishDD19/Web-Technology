import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'


function Signup() {
    return (
        <div>
            <label htmlFor="uname">Username</label>
            <input type="text" name="uname" id="uname" />
            <br /><br />
            <label htmlFor="pass">Password</label>
            <input type="password" name="pass" id="pass" />

            <br />
            <Link to="/"><button>Signup</button></Link>
        </div>
    )
}

export default Signup
