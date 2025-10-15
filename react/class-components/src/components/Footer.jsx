import React, { Component } from 'react'
import './Footer.css'
 class Footer extends Component {
  render() {
    return (
      <div>
        <div className='footer'>
          <h1>Footer</h1>
          <Components/>
        </div>
      </div>
    )
  }
}


class Components extends Component {
  render(){
      return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", width: "1000px", height: "30px", margin: "5px", border: "1px solid black" }}>
      <h2>Component</h2>

    </div>
  )
  }

}

export default Footer
