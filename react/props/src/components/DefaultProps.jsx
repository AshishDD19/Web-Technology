import React from 'react'

function DefaultProps({name = "Guest"}) {

  return (
    <div>
      <h1>Hi, I am {name} </h1>
    </div>
  )
}

export default DefaultProps
