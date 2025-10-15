import React, { useState } from 'react'

function Login() {
    const[name,setName] = useState(" ");
    const[pass,setPass] = useState(" ");
    const handleSubmit=()=>{
        alert(`Username: ${name} \n Password: ${pass}`)
    }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label >Username: </label>
        <input type="text" placeholder='Enter your username' onChange={(e) => setName(e.target.value)}/>
        <br /><br />
        <label >Password: </label>
        <input type="password" placeholder='Enter your Password' onChange={(e) => setPass(e.target.value)}/>
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
