
import React, { Component } from 'react'
import './Main.css'
class Main extends Component {
  render() {
    return (
      <div>
        <div className='main'>
          <h1>Main</h1>
          <Components />
          <div style={{ display: "flex" }}>
            <Child1 />
            <Child2 />
          </div>
        </div>
      </div>
    )
  }
}

class Components extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "lightgreen", width: "820px", height: "50px", margin: "5px", border: "1px solid black" }}>
        <h2>Component</h2>

      </div>
    )
  }

}

class Child1 extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "lightgreen", width: "400px", height: "300px", margin: "5px", border: "1px solid black" }}>
        <h2>Child 1</h2>

      </div>
    )
  }

}

class Child2 extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "lightgreen", width: "400px", height: "300px", margin: "5px", border: "1px solid black" }}>
        <h2>Child 2</h2>

      </div>
    )
  }

}

export default Main