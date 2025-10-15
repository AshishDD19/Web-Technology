import React, { Component } from 'react'

export default class PropsInClass extends Component {
  render() {
    return (
      <div>
        <h1>Hi, i am {this.props.name} and my age is {this.props.age} </h1>
      </div>
    )
  }
}
