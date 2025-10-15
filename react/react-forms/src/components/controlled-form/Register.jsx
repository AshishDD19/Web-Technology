import React, { useState } from 'react'

function Register() {
    const[details,setDetails] = useState({Name:'',
                                        Age:'',
                                        Gender:'',
                                        Course: ''})

    const handleSubmit = ()=>{
        alert(`Name: ${details.Name} \n Age: ${details.Age} \n Gender: ${details.Gender} \n Course: ${details.Course}`)
        // <h1>Student Details</h1>
        // <ul>
        //     <li>Name: {details.Name}</li>
        //     <li>Age: {details.Age}</li>6
        //     <li>Gender: {details.Gender}</li>
        //     <li>Course: {details.Course}</li>
        // </ul>
        // </>
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name: <input type="text" onChange={(e)=> setDetails({...details,Name:e.target.value})} /> 
        <br /><br />
        Age : <input type='text'onChange={(e)=> setDetails({...details,Age:e.target.value})}/>
        <br /><br />
        Gender: <input type="text" onChange={(e)=> setDetails({...details,Gender:e.target.value})}/>
        <br /><br />
        Course: <input type="text"onChange={(e)=> setDetails({...details,Course:e.target.value})} />
        <br /><br />

        <input type="submit" value="Submit" /> 
      </form>
    
      
    </div>
  )
}

export default Register
