import React, { Component } from 'react'
import Counter from './Counter.js'
import CounterGenerator from './CounterGenerator'
import { connect } from "react-redux";

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch({
      type : "GENERATE_COUNTERS",
      payload : this.props.total
    });
  }
  // state = {
  //   // sum : 0,
  //   counters : new Array(this.props.total).fill(0).map(() => {
  //     return {
  //       id : new Date().getTime() + Math.random(),
  //       number : 0
  //     }
  //   })
  // };


  
  updateSum = (delta) => {
    // let newSum = this.props.sum + delta;
    // this.setState({sum : newSum});
    this.props.dispatch({
      type : "SUM",
      payload : delta
    });
  }

  setNum = (num) => {
    // this.setState({
    //   counters : new Array(num).fill(0).map(() => {
    //     return {
    //       id : new Date().getTime() + Math.random(),
    //       number : 0
    //     }
    //   })
    // })
    this.props.dispatch({
      type : "GENERATE_COUNTERS",
      payload : num
    });
    // this.props.dispatch({
    //   type: "SUM",
    //   payload: -(this.props.sum)
    // });
    
  }

  counterAdd = (id) => {
    // let newCounter = this.state.counters.map(counter => {
    //   if (counter.id === id) {
    //     return {
    //       id : id,
    //       number : counter.number + 1
    //     }
    //   }else {
    //     return counter
    //   }
    // })
    this.props.dispatch({
      type : "COUNTER_INCREASE",
      payload : id
    });
    // this.setState({counters : newCounter});
    this.updateSum(1);
  }

  counterMinus = (id) => {
    // let newCounter = this.state.counters.map(counter => {
    //   if (counter.id === id) {
    //     return {
    //       id : id,
    //       number : counter.number - 1
    //     }
    //   }else {
    //     return counter
    //   }
    // })
    this.props.dispatch({
      type : "COUNTER_DECREASE",
      payload : id
    });
    // this.setState({counters : newCounter});
    this.updateSum(-1);
  }

  render() {
    return (
      <div>
        <div>{this.props.counters.map(counter => <Counter id={counter.id} count={counter.number} onIncreased={this.counterAdd} onDecreased={this.counterMinus}/>)}</div>
        <div>
          <CounterGenerator applyChange={this.setNum} />
        </div>
        <span>Sum : {this.props.sum}</span>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sum : state.sum,
  counters : state.counters
});

export default connect(mapStateToProps)(CounterGroup);