import React from "react";
import "./Aside.css"

const Aside = ()=>{
    return(
        <>
            <div className="aside">
                <h1>Aside</h1>
                <div style={{display:"flex"}}>
                    <Child1/>
                    <Child2/>
                </div>
            </div>

        </>
    )
}

function Child1() {
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center", background:"orange", width:"310px",height:"370px",margin:"5px",border:"1px solid black"  }}>
      <h2>Child 1</h2>
      
    </div>
  )
}

function Child2() {
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center", background:"orange", width:"310px",height:"370px",margin:"5px",border:"1px solid black"  }}>
      <h2>Child 2</h2>
      
    </div>
  )
}
export default Aside;