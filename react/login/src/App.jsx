
import './App.css'
import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Password from './components/Password'
function App() {


    return (
        <>
        <div className='body'>
            <header>
                <h1>Welcome</h1>
            </header>

            <main>
                <Login/>
                <Signup/>
                <Password/>
                {/* <div className="container">
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
                    <p>Don't have an account? <a href="#">Sign Up</a></p>
                </div>
                <div className='cont2'>
                    <form action="">
                        <div class="heading">
                            <h1>Create an account</h1>
                        </div>
                        <div class="inputfield">
                            <label>First Name: </label>
                            <input type="text" name="First Name" required id="txtbox" />
                        </div>

                        <div class="inputfield">
                            <label>Last Name: </label>
                            <input type="text" name="Last Name" id="txtbox" />
                        </div>

                        <div class="inputfieldDate">
                            <label>Date of Birth: </label>
                            <input type="date" name="Date Of birth" required />
                        </div>

                        <div class="inputfield">
                            <label>Email: </label>
                            <input type="email" name="Email" required id="txtbox" />
                        </div>

                        <div class="inputfield">
                            <label>Password: </label>
                            <input type="password" name="Password" required id="txtbox" />
                        </div>

                        <div class="inputfieldGender">
                            <label>Gender: </label>
                            <input type="radio" name="Gender" value="Male" />Male
                            <input type="radio" name="Gender" value="Female" />Female
                        </div>

                        <div class="inputfield">
                            <label>Address: </label>
                            <textarea name="Address" rows="5"></textarea>
                        </div>

                        <div class="inputfield">
                            <label>Pincode: </label>
                            <input type="text" name="Pincode" id="txtbox" />
                        </div>

                        <div class="inputfieldSelect">
                            <label>Select State: </label>
                            <select name="Select State">
                                <option value="Karnataka">Karnataka</option>
                                <option value="Andra Pradesh">Andra Pradesh</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                            </select>
                        </div>

                        <div class="inputfieldCity">
                            <label>Select City: </label>
                            <select name="Select City">
                                <option value="Bengaluru">Bengaluru</option>
                                <option value="Mysore">Mysore</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Hyderbad">Hyderbad</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Kochi">Kochi</option>
                            </select>
                        </div>

                        <div class="inputfieldImg">
                            <label>Upload Image: </label>
                            <input type="file" name="Upload Image" />
                        </div>

                        <div class="inputfield2">
                            <input type="checkbox" name="Terms and condition" required />
                            <label>Accept terms and conditions.</label>
                        </div>

                        <div class="btn">
                            <button>Signup</button>
                        </div>

                        <div class="txt">
                            <p>Already have an account? <a href="LoginPage.html">Click here</a> to Login</p>
                        </div>

                    </form>
                </div>
                <div className='cont3'>
                    <form action="">
                        <div className="heading">
                            <h1>Set Password</h1>
                        </div>
                        <div className="inputfield">
                            <label>Name: </label>
                            <input type="text" name="Name" required />
                        </div>
                        <div className="inputfield">
                            <label>Email: </label>
                            <input type="email" name="Email" required />
                        </div>
                        <div className="inputfield">
                            <label>Password: </label>
                            <input type="password" name="Password" required />
                        </div>
                        <div className="inputfield">

                            <label>Confirm Password: </label>
                            <input type="password" name="Confirm Password" required />
                        </div>
                        <div className="inputfield">
                            <label>Phone Number: </label>
                            <input type="text" name="Phone Number" required />
                        </div>
                        {/* <div className="inputfieldOTP">
                    <label>Enter OTP: </label>
                    <input type="text" size="1"/> <input type="text" size="1"/> <input type="text" size="1"/> <input
                        type="text" size="1"/>
                </div> 
                        <div className="inputfieldbtn">
                            <input type="submit" value="Submit" />
                            <input type="reset" value="Reset" />
                        </div>
                    </form>
                </div> */}

            </main>

            <footer>
                <h2>&copy; Copyrights 2025</h2>
            </footer>
        </div>
        </>
    )
}

export default App
