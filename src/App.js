import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component{
constructor(){
  super();
  this.state = {
    count: 0,
  }
}
// this is where we are going to put our methods.
increment = () => {
  this.setState ({
      count: this.state.count + 1

  })
}
decrement = () => {
  this.setState ({
    count: this.state.count - 1
  })
}

  render(){
    return (
      <div className="container">
        <div className="navbar">Counter</div>
          <div className="counter">
            <h1>{this.state.count}</h1>
            <button type="button" onClick={this.increment}>Increment</button>
            <button type="button" onClick={this.decrement}>Decrement</button>
          </div>
      </div>
    )
  }
}
export default Counter;
