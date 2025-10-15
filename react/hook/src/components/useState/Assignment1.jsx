import React, { useState } from 'react'
import "./Assignment1.css"
import bell from "../../assets/bell.png"

function Assignment1() {
  const[text,textChange] = useState("Please Subscribe")
  const[btnText,btnChange] = useState("Subscribe")
  const[bellIcon,rotate] = useState("bellIcon")

  const changeBtnTxt = ()=>{
    textChange("Thanks for Subscribing")
    btnChange("Subscribed")
    rotate("bellIconTurn")

  }
  return (
          <div>
            <div className='section'>
                <h2>{text} </h2>
                <div className='btnSec'>
                    <button className='btn' onClick={changeBtnTxt}>{btnText}</button>
                    <img src={bell} alt="" className={bellIcon} />
                
                </div>
            </div>
          </div>
  )
}

export default Assignment1
