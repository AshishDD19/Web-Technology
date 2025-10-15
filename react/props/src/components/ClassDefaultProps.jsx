import React, { Component } from 'react'

export default class ClassDefaultProps extends Component {
  render({name = "Guest"}=this.props) {
    return (
      <div>
        <h1>Hi, i am {name}  </h1>
        
      </div>
    )
  }
}
