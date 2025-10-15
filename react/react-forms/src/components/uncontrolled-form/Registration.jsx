import React, { useRef } from 'react'

function Registration() {
    const nameref = useRef();
    const ageref = useRef();
    const genderref = useRef();
    const courseref = useRef();

        const handleSubmit = ()=>{
        alert(`Student Details: \n 
            Name: ${nameref.current.value} \n 
            Age: ${ageref.current.value} \n 
            Gender: ${genderref.current.value} \n 
            Course: ${courseref.current.value}`)
        }
  return (


    <div>
    <form onSubmit={handleSubmit}>
        Name: <input type="text" ref={nameref} /> 
        <br /><br />
        Age : <input type='text'ref={ageref}/>
        <br /><br />
        Gender: <input type="text" ref={genderref}/>
        <br /><br />
        Course: <input type="text" ref={courseref}/>
        <br /><br />

        <input type="submit" value="Submit" /> 
      </form>
    </div>
  )
}

export default Registration
