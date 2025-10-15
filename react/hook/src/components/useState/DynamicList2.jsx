import React, { useState } from 'react'

function DynamicList2() {
    const[user,setUser] = useState([{id:1,name:"Ashish", age: 22 , salary: 45000},
                                    {id:2,name:"Marry", age: 32 , salary: 35000},
                                    {id:3,name:"Bob", age: 23 , salary: 45000},
                                    {id:4,name:"Vinay", age: 34 , salary: 22000},
                                    {id:5,name:"Molly", age: 35 , salary: 55000},
                                    {id:6,name:"Kiran", age: 21 , salary: 25000}
                                ])

  return (
    <div>
      <ol>
        {user.map((x, id) => <li key={id}>{x.name} - {x.age}</li> )}
      </ol>

      User above age 30 and salary more than 30000

      <ul>
        {user.filter((x) => x.age > 30 && x.salary >30000 ).map((x,id) => <li key={id}>{x.name} </li> )}
      </ul>
    </div>
  )
}

export default DynamicList2
