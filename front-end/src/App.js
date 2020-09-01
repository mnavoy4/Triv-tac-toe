import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Components/Question'
import Game from './Components/Game';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Game/>
      </div>
    );
  }
}

export default App;
