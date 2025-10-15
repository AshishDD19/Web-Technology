import React, { useEffect, useState } from 'react'

function UseEffectFetch2() {

    const [user,setUser] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data) => setUser(data))
    },[])
    return (
    <div>
      <h1>Use effect example</h1>
      
      <ol>
        {user.map((x)=>
            
            <li key={x.id}>{x.name}, Address: {x.address.street},{x.address.city},{x.address.zipcode},  Company: {x.company.name} </li>
        ) }
      </ol>
    </div>
  )
}

export default UseEffectFetch2;
