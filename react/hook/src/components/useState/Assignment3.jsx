import React, { useState } from 'react'

function Assignment3() {
    const [isVisible,setVisibility] = useState(false)

  return (
    <div>
      <button onClick={() => setVisibility(!isVisible)}>{isVisible ? "Hide" : "Show"} </button>
      {isVisible && <p>I am visible now..</p> }
    </div>
  )
}

export default Assignment3
