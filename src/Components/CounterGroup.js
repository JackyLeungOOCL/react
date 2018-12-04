import React, { Component } from 'react'
import Counter from './Counter.js'
import CounterGenerator from './CounterGenerator'

export default class CounterGroup extends Component {
  state = {
    sum : 0,
    input : '',
    counters : new Array(this.props.total).fill(0).map(() => {
      return {
        id : new Date().getTime() + Math.random(),
        number : 0
      }
    })
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

  counterAdd = (id) => {
    let newCounter = this.state.counters.map(counter => {
      if (counter.id === id) {
        return {
          id : id,
          number : counter.number + 1
        }
      }else {
        return counter
      }
    })
    this.setState({counters : newCounter});
    this.updateSum(1);
  }

  counterMinus = (id) => {
    let newCounter = this.state.counters.map(counter => {
      if (counter.id === id) {
        return {
          id : id,
          number : counter.number - 1
        }
      }else {
        return counter
      }
    })
    this.setState({counters : newCounter});
    this.updateSum(-1);
  }

  render() {
    return (
      <div>
        <div>{this.state.counters.map(counter => <Counter id={counter.id} count={counter.number} onIncreased={this.counterAdd} onDecreased={this.counterMinus}/>)}</div>
        <div>
          <CounterGenerator applyChange={this.setNum} />
        </div>
        <span>Sum : {this.state.sum}</span>
      </div>
    )
  }
}
