import React, { Component } from 'react';
import { throwStatement } from '@babel/types';

class App extends Component{
  constructor (){
    super()
    this.state = {
      number: [],
      result: null
    }
  }
  handleClick (num){
    let temp = this.state.number
    console.log(temp)
    temp.push(num)
    this.setState({number:temp})
    console.log(temp)

  }
  render(){
  return (
   <div>
     <button onClick={() => this.handleClick(1)}>1</button>
     <button onClick={() => this.handleClick(2)}>2</button>
     <button onClick={() => this.handleClick(3)}>3</button><br/>
     <button onClick={() => this.handleClick(4)}>4</button>
     <button onClick={() => this.handleClick(5)}>5</button>
     <button onClick={() => this.handleClick(6)}>6</button><br/>
     <button onClick={() => this.handleClick(7)}>7</button>
     <button onClick={() => this.handleClick(8)}>8</button>
     <button onClick={() => this.handleClick(9)}>9</button><br/>
     <button onClick={() => this.handleClick(0)}>0</button>
     <button onClick={() => this.handleClick("+")}>+</button>
     <button onClick={() => this.handleClick("-")}>-</button><br/>
     <button onClick={() => this.handleClick("%")}>%</button>
     <button onClick={() => this.handleClick("*")}>*</button>
     <button>=</button>
   </div>
  );
  }
}

export default App;
