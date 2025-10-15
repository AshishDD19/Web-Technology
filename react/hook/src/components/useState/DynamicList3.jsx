import React, { useState } from 'react'

function DynamicList3() {
    const[list,setList] = useState(["Book","Pen","PS5"])

    let newItem;
    const addList=() => {
        setList([...list ,`new list ${list.length + 1}`])
    } 
    

  return (
    <div>
        <h3>Item List</h3>
      <ol>
        {list.map((x, id) => <li key={id}>{x}</li> )}
      </ol>

      
      <button onClick={addList}>Add List</button>
    </div>
  )
}

export default DynamicList3
