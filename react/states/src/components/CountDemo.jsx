import React, { Component } from 'react'

export default class CountDemo extends Component {
    constructor(props){
        super(props);
        this.state = {count : 0}
    }

    incrementCount = ()=>{
        this.setState({count : this.state.count + 1})
    }

    decrementCount = ()=>{
        this.setState({count : this.state.count - 1})
    }

  render() {
    return (
      <div>
        <h2>Count value is: {this.state.count} </h2>
        <button onClick={this.incrementCount}>Increment</button>
        
        <button onClick={this.decrementCount}>Decrement</button>    

      </div>
    )
  }
}
