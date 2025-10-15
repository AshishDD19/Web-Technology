import React, { useState } from 'react'

function UsingObject() {
    const [obj,setObj] = useState({name:"Ashish", age:22})

    const changeDetails=()=>{
        // const newObj = {...obj}
        // newObj.name = "Bob"
        // newObj.age = 32
        // setObj(newObj)

        // or

        setObj({...obj, name:"Bob",age:24})
    }

  return (
    <div>
      <p>Name: {obj.name}</p>
      <p>Age: {obj.age}</p>
      <button onClick={changeDetails}>Click here</button>
    </div>
  )
}

export default UsingObject
