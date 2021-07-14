import logo from './logo.svg';
import './App.css';
import React from 'react';

var count = 0;
var range = 1;
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count : 0,
      range : 1,
    };
    this.inc = this.inc.bind(this);
    this.rangeChange = this.rangeChange.bind(this);
  }
  inc(val){
    if (val == 2){
      count = count +range;
      this.setState({count : count});
    }
    else if(val == 3){
      count =count -range;
      this.setState({count : count});
    }
    if(count){}
    else{
      count = 0;
    }
    return {__html: count};
  }
  rangeChange(){
    var value = document.getElementById('field').value;
    if (parseInt(value)){
      range =parseInt(value);
      this.setState({range : value});
    }
    else{
      document.getElementById('field').placeholder='Invalid number...';
      document.getElementById('field').value='';
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>Range: {range}</p>
          <p className='inline'>Count: <p className='inline' dangerouslySetInnerHTML = {this.inc(0)}></p></p>
          <div className="butDiv">
          <button
            className="Inc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => this.inc(2)}
          >
            Increment++
          </button>
          <button
            className="Dec"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => this.inc(3)}
          >
            Decrement--
          </button>
          </div><br></br>
          <input className='field' onKeyUp={() => this.rangeChange()} id='field' type='text' placeholder='Range to count...'></input>
        </header>
      </div>
    );
  }

}

export default App;
