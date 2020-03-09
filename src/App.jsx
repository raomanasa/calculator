import React, { Component } from 'react';
import { throwStatement } from '@babel/types';

class App extends Component{
  constructor (){
    super()
    this.state = {
      data: [],
      result: null
    }
  }
  handleClear (){
    this.setState({data: [], result: null})
  }
  handleResult (){
    let number = []
    let sign = []
    for (let i=0;i<this.state.data.length;i++) {
      if (typeof this.state.data[i] == 'string') {
        sign.push(this.state.data[i])
      }
      else {
        number.push(this.state.data[i])
      }
    }
    let ans = number[0]
    for(let i=0;i<sign.length;i++){
      if (sign[i]==="+") {
        ans=ans+number[i+1]
      }
      else if (sign[i]==="-"){
        ans=ans-number[i+1]
      }
      else if (sign[i]==="%"){
        ans=ans%number[i+1]
      }
      else if (sign[i]==="*"){
        ans=ans*number[i+1]
      }
    }
    this.setState({result:ans})
    console.log(number)
    console.log(sign)
    console.log(ans)
  }
  handleClick (num){
    let temp = this.state.data
    console.log(temp)
    temp.push(num)
    this.setState({data:temp})
    console.log(temp)

  }
  render(){
  return (
   <div className="box">
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
