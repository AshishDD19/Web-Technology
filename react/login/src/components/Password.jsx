import React from "react";
import "./Password.css"

function Password() {
    return (
        <>
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
                    <div className="inputfieldOTP">
                        <label>Enter OTP: </label>
                        <input type="text" size="1" /> <input type="text" size="1" /> <input type="text" size="1" /> <input type="text" size="1" />
                    </div>
                    <div className="inputfieldbtn">
                        <input type="submit" value="Submit" />
                        <input type="reset" value="Reset" />
                    </div>
                </form>
            </div>
        </>
    )
}
export default Password;