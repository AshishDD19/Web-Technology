import React, { useState } from 'react'

function Assignment2() {
    const[obj, setObj] = useState({name:"" , mail : ""})



  return (
    <div>
      <label htmlFor='name'>Name:</label>
      <input type="text"  id="name" placeholder='Enter your name' onChange={(e) => setObj({...obj, name :e.target.value})}/>
      <br />
      <label htmlFor='mail'>Email:</label>
      <input type="email"  id="mail" placeholder='Enter your email' onChange={(e) => setObj({...obj, mail:e.target.value})}/>

      <br /><br />
      <p>Name is: {obj.name}</p>
      <p>Mail is: {obj.mail}</p>

    </div>
  )
}

export default Assignment2
