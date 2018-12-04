import React, { Component } from 'react'

export default class Counter extends Component {
  state = {count : 0}

  addCount = () => {
    let newCount = this.state.count + 1;
    this.setState({count : newCount});
    this.props.onUpdate(1);
  }

  minusCount = () => {
    let newCount = this.state.count - 1;
    this.setState({count : newCount});
    this.props.onUpdate(-1);
  }
  render() {
    return (
      <div>
        <button onClick={this.addCount}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.minusCount}>-</button>
      </div>
    )
  }
}
