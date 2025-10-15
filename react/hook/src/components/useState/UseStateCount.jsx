import React, { useState } from 'react'

function UseStateCount() {

  const [count, changeCount] = useState(0)

  const increaseCount = () => {
    changeCount(count + 1);
  }

  const decreaseCount = () => {
    changeCount(count - 1);
  }

  return (

    <div>
      <h1>The Count value: {count}</h1>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>

    </div>
  )
}

export default UseStateCount
