import React, { Component } from 'react'

export default class StatesDemo extends Component {
    constructor(props){
        super(props);
        this.state = {name : "Ashish",
                       age : 23,
                       gender:"Male"
                    }
    }

    changeName = ()=>{
        this.setState({name:"Bob"})
    }

  render() {
    return (
      <div>
        <h2>My name is {this.state.name} ({this.state.gender}) , of age {this.state.age} </h2> 
        <button onClick={this.changeName}>Click Here</button>   
      </div>
    )
  }
}
