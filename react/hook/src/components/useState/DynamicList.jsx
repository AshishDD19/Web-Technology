import React, { useState } from 'react'

function DynamicList() {
    const [tech,setTech] = useState(["HTML","CSS","Javascript","React"])

  return (
    <div>
      <ol>
        {tech.map((t,index) => <li key={index}>{t}</li> )}
      </ol>
    </div>
  )
}

export default DynamicList
