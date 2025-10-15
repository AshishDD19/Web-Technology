import React from "react";
import "./Login.css"
import Signup from "./Signup";
function Login() {
    return (
        <>
            <div className="container">
                <div className="heading">
                    <h1>Login</h1>
                </div>

                <div className="inputfield">
                    <label>Username</label>
                    <input type="text" name="Username" placeholder="Enter your username" required />
                </div>
                <div className="inputfield">
                    <label>Password</label>
                    <input type="password" name="Password" placeholder="Enter your password" required />
                </div>
                <p><a href="#">Forgot password?</a></p>
                <div><button className="btn">Login</button></div>
                <p>Don't have an account? <a href= "#">Sign Up</a></p>
                
            </div>
        </>
    )
}
export default Login;