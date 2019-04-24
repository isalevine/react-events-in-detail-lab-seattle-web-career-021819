// Code CoordinatesButton Component Here
import React, {Component} from 'react'


export default class CoordinatesButton extends Component {

  render() {
    return <button onClick={this.handleClick}>Coordinates Button</button>
  }

  handleClick = (ev) => {
    let xx = ev.clientX
    let yy = ev.clientY
    let array = [xx, yy]
    this.props.onReceiveCoordinates(array)
  }

}
