import React, { Component } from 'react'
import Counter from './Counter.js'

export default class CounterGroup extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     sum : 0,
  //     numberArray : new Array(0).fill(0),
  //     input : ""
  //   };

  //   this.updateWithInput = this.updateWithInput.bind(this);
  // }
  state = {
    sum : 0,
    numberArray : new Array(this.props.total).fill(0),
    input : ''
  };
  
  updateSum = (delta) => {
    let newSum = this.state.sum + delta;
    this.setState({sum : newSum});
  }

  updateWithInput =(event) => {
    this.setState({
      input : event.target.value
    })
    console.log(event.target.value)
  }

  generateCounters = () => {
    const num = this.state.input;
    const newArray = new Array(parseInt(num)).fill(0);
    this.setState({
      numberArray : newArray
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.numberArray.map(() => <Counter onUpdate={this.updateSum}/>)}</div>
        <div>
          <input type="text" onChange={this.updateWithInput}></input>
          <button onClick={this.generateCounters}>Regenerate indicated Counters</button>
        </div>
        <span>Sum : {this.state.sum}</span>
      </div>
    )
  }
}
