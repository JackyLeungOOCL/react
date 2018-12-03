import React, { Component } from 'react';
import './App.css';
import CounterGroup from './Components/CounterGroup';

class App extends Component {
  state = {count : 0}

  addCount = () => {
    let newCount = this.state.count + 1;
    this.setState({count : newCount});
  }

  minusCount = () => {
    let newCount = this.state.count - 1;
    this.setState({count : newCount});
  }

  render() {
    return (
      <div className="App">
        {/* <button onClick={this.addCount}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.minusCount}>-</button> */}
        <CounterGroup total={3} />
      </div>
    );
  }
}

export default App;
