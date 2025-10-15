import React, { Component } from 'react'

export default class ClassPropsDestucting extends Component {


  render({name,age} = this.props) {
    return (
      <div>
        <h1>Hi, i am {name} and my age is {age} </h1>
        
      </div>
    )
  }
}
