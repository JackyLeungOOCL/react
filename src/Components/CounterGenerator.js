import React, { Component } from 'react'

export default class CounterGenerator extends Component {
  state = {
    num : 0,
    input : 0
  }

  updateWithInput =(event) => {
    this.setState({
      input : event.target.value
    })
  }

  parseNum = () => {
    this.props.applyChange(parseInt(this.state.input));
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateWithInput}></input>
        <button onClick={this.parseNum}>Regenerate indicated Counters</button>
      </div>
    )
  }
}
