import React, { Component } from 'react'
import { connect } from "react-redux";

export default class CounterGenerator extends Component {
  parseNum = () => {
    this.props.applyChange(parseInt(this.refs.input.value));
  }

  render() {
    return (
      <div>
        <input type="text" ref="input" onChange={this.updateWithInput}></input>
        <button onClick={this.parseNum}>Regenerate indicated Counters</button>
      </div>
    )
  }
}