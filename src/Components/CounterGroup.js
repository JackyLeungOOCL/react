import React, { Component } from 'react'
import Counter from './Counter.js'

export default class CounterGroup extends Component {
  state = {
    sum : 0,
    numberArray : new Array(this.props.total).fill(0)
  };
  
  updateSum = (delta) => {
    let newSum = this.state.sum + delta;
    this.setState({sum : newSum});
  }

  render() {
    return (
      <div>
        <div>{this.state.numberArray.map(() => <Counter onUpdate={this.updateSum}/>)}</div>
        <span>Sum : {this.state.sum}</span>
      </div>
    )
  }
}
