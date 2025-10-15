import React, { Component } from 'react'
import '../components/Assignment.css'
import bell from '../assets/bell.png'

export default class Assignment extends Component {
    constructor(props){
        super(props);
        this.state = {   text: "Please Subscribe",
                        btnText: "Subscribe",
                        bellIcon :"bellIcon"
         }
    }

    textChange = ()=>{
        this.setState({text:"Thanks for Subscribing",
                        btnText:"Subscribed",
                        bellIcon:"bellIconTurn"
        })
    }

  render() {
    return (
      <div>
        <div className='section'>
            <h2>{this.state.text} </h2>
            <div className='btnSec'>
                <button className='btn' onClick={this.textChange}>{this.state.btnText}</button>
                <img src={bell} alt="" className={this.state.bellIcon} />
            
            </div>
        </div>
      </div>
    )
  }
}
