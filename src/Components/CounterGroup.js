import React, { Component } from 'react'
import Counter from './Counter.js'
import CounterGenerator from './CounterGenerator'

export default class CounterGroup extends Component {
  state = {
    sum : 0,
    numberArray : new Array(this.props.total).fill(0),
    input : '',
    count : 0,
    counters : {
      id : 0,
      number : 0
    }
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

  counterAdd = () => {
    this.setState({counters : {id : 0, number : this.state.counters.number + 1}});
    this.updateSum(1);
  }

  counterMinus = () => {
    this.setState({counters : {id : 0, number : this.state.counters.number - 1}});
    this.updateSum(-1);
  }

  render() {
    return (
      <div>
        <div>{this.state.numberArray.map(() => <Counter count={this.state.counters.number} onIncreased={this.counterAdd} onDecreased={this.counterMinus}/>)}</div>
        <div>
          <CounterGenerator applyChange={this.setNum} />
        </div>
        <span>Sum : {this.state.sum}</span>
      </div>
    )
  }
}
