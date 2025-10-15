import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div className='header'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.min.js" integrity="sha512-b+nQTCdtTBIRIbraqNEwsjB6UvL3UEMkXnhzd8awtCYh0Kcsjl9uEgwVFVbhoj3uu1DO1ZMacNvLoyJJiNfcvg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      
       
        <a href="#"><h3>Home</h3></a>
        <a href="#"><h3>Order</h3></a>
        <a href="#"><h3>Food</h3></a>
        <a href="#"><h3>Restaurant</h3></a>
        <a href="#"><h3>Testimonials</h3></a>
        <a href="#"><h3>Contact Us</h3></a>
        <a href="#"><i class="fa-solid fa-bars"></i></a>    
   
   
    </div>
  )
}

export default Header
