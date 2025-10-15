import React from 'react'
import './Main.css'
function Main() {
  return (
    <>
    <div className='main'>
      <h1>Main</h1> 
      <Component/>
      <div style={{display:"flex"}}>
        <Child1/>
        <Child2/>
      </div>
    </div>
     
    
    </>
  )
}

function Component() {
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center", background:"lightgreen", width:"820px",height:"50px",margin:"5px",border:"1px solid black"  }}>
      <h2>Component</h2>
      
    </div>
  )
}

function Child1() {
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center", background:"lightgreen", width:"400px",height:"300px",margin:"5px",border:"1px solid black"  }}>
      <h2>Child 1</h2>
      
    </div>
  )
}

function Child2() {
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center", background:"lightgreen", width:"400px",height:"300px",margin:"5px",border:"1px solid black"  }}>
      <h2>Child 2</h2>
      
    </div>
  )
}

export default Main
