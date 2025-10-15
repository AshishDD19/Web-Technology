import React from 'react'
import logo from "../assets/phoenix-logo.png"
import "./Header.css"
function Header() {
    return (
        <div className='header'>
            <div class="logo">
                <img src={logo} className="imglogo" height="90" width="90" />
            </div>
            <div class="nav">
                <a href="#">Home</a>
                <a href="#">Order</a>
                <a href="#">Food</a>
                <a href="#">Resutrant</a>
                <a href="#">Testimonial</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="icon">
                <div className="icon1">
                    <i class="fa-brands fa-whatsapp what"></i>
                </div>
                <div className="icon2">
                    <i class="fa-brands fa-facebook-f face"></i>

                </div>
            </div>
        </div>
    )
}

export default Header
