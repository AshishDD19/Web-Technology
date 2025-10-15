import React, { useState } from 'react'

function UseStateDemo() {

    const[name,changeName] = useState("Ashish")
    const[age,changeAge] = useState(23)

    const changeValue = ()=>{
        changeName("Bob");
        changeAge(age+2);
    }


  return (
    <div>
      <p>My name is {name} </p>
      <p>My age is {age} </p>
      <button onClick={changeValue}>Change name</button>
    </div>
  )
}

export default UseStateDemo
