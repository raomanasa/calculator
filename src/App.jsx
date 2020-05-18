import React, { Component } from 'react';
import { throwStatement } from '@babel/types';

class App extends Component{
    constructor() {
      super();
      this.state = { array: [], result: null };
      this.handleClick = this.handleClick.bind(this);
      this.handleResult = this.handleResult.bind(this);
      this.handleClear = this.handleClear.bind(this);
    }
    handleClick(str) {
      let ary = this.state.array;
      ary.push(str);
      this.setState({ array: ary });
    }
    handleClear() {
      this.setState({ array: [], result: null })  
    }
    handleResult() {
      let num = [];
      let num2 = [];
      let temp = [];
      let sign = [];
  
      let count = 0;
      for (let i = 0; i < this.state.array.length; i++) {
        if (typeof this.state.array[i] === "string") {
          sign.push(this.state.array[i]);
          num2.push(temp);
          temp = [];
        } else {
          temp.push(this.state.array[i]); 
        }
      }
      num2.push(temp);
      let temp2;
      for (let i = 0; i < num2.length; i++) {
        count = 0;
        temp2 = 0;
        for(let j = num2[i].length-1 ; j >= 0; j--) {
          temp2 = temp2 + num2[i][j]* Math.pow(10,count);
          count ++;
        }
        num.push(temp2)
      }
      let result = num[0];
      for (let i = 0; i < sign.length; i++) {
        if (sign[i] === "+") {
          result = result + num[i + 1];
        } else if (sign[i] === "-") {
          result = result - num[i + 1];
        } else if (sign[i] === "*") {
          result = result * num[i + 1];
        } else if (sign[i] === "/") {
          result = result / num[i + 1];
        } else if (sign[i] === "%") {
          result = result % num[i + 1];
        }
      }
      this.setState({ result: result });
    }
  render(){
  return (
    <div className="box">
    <h1>CALCULATOR</h1>
    
   
     <button className="button" onClick={() => this.handleClick(1)}>1</button>
     <button className="button" onClick={() => this.handleClick(2)}>2</button>
     <button className="button" onClick={() => this.handleClick(3)}>3</button><br/>
     <button className="button" onClick={() => this.handleClick(4)}>4</button>
     <button className="button" onClick={() => this.handleClick(5)}>5</button>
     <button className="button" onClick={() => this.handleClick(6)}>6</button><br/>
     <button className="button" onClick={() => this.handleClick(7)}>7</button>
     <button className="button" onClick={() => this.handleClick(8)}>8</button>
     <button className="button" onClick={() => this.handleClick(9)}>9</button><br/>
     <button className="button" onClick={() => this.handleClick(0)}>0</button>
     <button className="button" onClick={() => this.handleClick("+")}>+</button>
     <button className="button" onClick={() => this.handleClick("-")}>-</button><br/>
     <button className="button" onClick={() => this.handleClick("%")}>%</button>
     <button className="button" onClick={() => this.handleClick("*")}>*</button>
     <button className="button" onClick={() => this.handleResult()}>=</button><br/>
     <button className="button" onClick={() => this.handleClear()}>CLEAR</button>
     <p>{this.state.result}</p>
   </div>
  );
  }
}

export default App;
