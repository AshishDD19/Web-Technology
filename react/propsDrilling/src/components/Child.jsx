import React from 'react'
import GrandChild from './GrandChild'

function Child({user}) {
  return (
    <div>
      <GrandChild name={user}/>
    </div>
  )
}

export default Child
