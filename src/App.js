import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component{
constructor(){
  super();
  this.state = {
    count: 0,
    countPlus: 1,
    label: "Single",
  }
}
// this is where we are going to put our methods.

increment = () => {
  if ( this.state.count < 20){
    this.setState ({
        count: this.state.count + this.state.countPlus
    })
  }

}
decrement = () => {
  if( this.state.count > 0){
    this.setState ({
      count: this.state.count - this.state.countPlus
    })
  }
}

reset = () => {
  this.setState ({
    count: this.state.count = 0
  })
}
toggleButton = () =>{
  if(this.state.label === "Single"){
    this.setState ({
      label: this.state.label = "Double",
      countPlus: this.state.countPlus = 2
    })
  }else{
    this.setState ({
      label: this.state.label = "Single",
      countPlus: this.state.countPlus = 1
    })
  }
}
  render(){
    return (
      <div className="container">
        <div className="navbar">Counter</div>
          <div className="counter">
            <h1>{this.state.count}</h1>
            <button type="button" onClick={this.increment}>Increment</button>
            <button type="button" onClick={this.decrement}>Decrement</button>
            <button type="button" onClick={this.reset}>Reset</button>
            <button type="button" onClick={this.toggleButton}>Toggle: {this.state.label}</button>
          </div>
      </div>
    )
  }
}
export default Counter;
