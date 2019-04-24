// Code DelayedButton Component Here
import React, {Component} from 'react'


export default class DelayedButon extends Component {

  render() {
    return <button onClick={this.handleClick}>Delayed Button</button>
  }

  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

}
