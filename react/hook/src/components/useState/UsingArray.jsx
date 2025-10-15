import React, { useState } from 'react'

function UsingArray() {

    const [arr,changeArr] = useState(["Ashish",22])

    const detailChange = ()=>{
        const newArr = [...arr]
        newArr[0] = "Bob"
        newArr[1] = 32

        changeArr(newArr)
    }

  return (
    <div>
        <p>My name is {arr[0]}</p>
        <p>My age is {arr[1]}</p>
        <button onClick={detailChange}>Click here</button>
      
    </div>
  )
}

export default UsingArray
