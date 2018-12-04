import React, { Component } from 'react';
import './App.css';
import CounterGroup from './Components/CounterGroup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterGroup total={1} />
      </div>
    );
  }
}

export default App;
