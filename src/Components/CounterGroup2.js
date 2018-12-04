import React, { Component } from 'react'
import Counter2 from './Counter2.js'

export default class CounterGroup2 extends Component {
  state = {
    sum : 0,
    numberArray : new Array(this.props.total).fill(0),
    objArray : [new Counter2(), new Counter2(), new Counter2()]
  };
  
  updateSum = (delta) => {
    let newSum = this.state.sum + delta;
    this.setState({sum : newSum});
  }

  resetCounters = () => {
    return
  }

  render() {
    return (
      <div>
        <div>{this.state.objArray.map((obj) => <Counter onUpdate={this.updateSum}/>)}</div>
        <div>Sum : {this.state.sum}</div>

        <button onClick={this.resetCounters}>reset</button>
      </div>
    )
  }
}
