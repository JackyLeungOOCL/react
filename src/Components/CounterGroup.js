import React, { Component } from 'react'
import Counter from './Counter.js'
import CounterGenerator from './CounterGenerator'

export default class CounterGroup extends Component {
  state = {
    sum : 0,
    numberArray : new Array(this.props.total).fill(0),
    input : ''
  };
  
  updateSum = (delta) => {
    let newSum = this.state.sum + delta;
    this.setState({sum : newSum});
  }

  setNum = (num) => {
      this.setState({
        numberArray : new Array(num).fill(0)
      })
  }

  render() {
    return (
      <div>
        <div>{this.state.numberArray.map(() => <Counter onUpdate={this.updateSum}/>)}</div>
        <div>
          <CounterGenerator applyChange={this.setNum} />
        </div>
        <span>Sum : {this.state.sum}</span>
      </div>
    )
  }
}
