import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
    <div  className='footer'>
      <h1>Footer</h1> 
      <Component/>
    </div>
     
    </>
  )
}

function Component() {
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center", backgroundColor:"white", width:"1000px",height:"30px",margin:"5px",border:"1px solid black"  }}>
      <h2>Component</h2>
      
    </div>
  )
}

export default Footer
