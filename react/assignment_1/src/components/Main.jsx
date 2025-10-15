import React from 'react'
import "./Main.css"
import "../components_1/Button.css"
import bgImage from "../assets/heroimg.jpg"
function Main() {
  return (
    <div className='main'>
      <Button/>
    </div>
  )
}

function Button(){
    return(
        <div>
            <button className="btn1">Lorem Ipsum</button>
        </div>
    )
}
export default Main
