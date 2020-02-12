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
  if ( this.state.count < 20){
    this.setState ({
        count: this.state.count + 1
    })
  }

}
decrement = () => {
  if( this.state.count > 0){
    this.setState ({
      count: this.state.count - 1
    })
  }
}

reset = () => {
  this.setState ({
    count: this.state.count = 0
  })
}
toggleIn = () =>{
  this.setState ({
    count: this.state.count = 2
  })
}
toggleDe = ()=>{

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
            <button type="button" onClick={this.toggleIn}>Toggle increment</button>
            <button type="button" onClick={this.toggleDe}>Toggle decrement</button>

          </div>
      </div>
    )
  }
}
export default Counter;
