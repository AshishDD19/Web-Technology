import React, { useRef, useState } from 'react'

function BothControlledAndUncontrolled() {
    const [name,setName] = useState('')
    const emailRef = useRef();

    const handleSubmit = ()=>{
        alert(`Name: ${name} \n
            Email: ${emailRef.current.value}`)
    }
  return (
    <div>
        <h1>Both Controlled And Uncontrolled Form</h1>
      <form onSubmit={handleSubmit}>
        Name: <input type="text" onChange={(e) => setName(e.target.value)}  />
        <br /><br />
        Email: <input type="email" ref={emailRef} />
        <br /><br />
        <input type="submit" value="Submit" />

      </form>
    </div>
  )
}

export default BothControlledAndUncontrolled
