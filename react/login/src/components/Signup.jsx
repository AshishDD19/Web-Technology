import React from "react";
import "./Signup.css"
function Signup() {
    return (
        <>
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
                        <p>Already have an account? <a href="#">Click here</a> to Login</p>
                    </div>

                </form>
            </div>
        </>
    )
}
export default Signup;