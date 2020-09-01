import React from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Components/Question'
import Game from './Components/Game';

function App() {
  return (
    <div className="App">
      <Question />
      <Game />
    </div>
  );
}

export default App;
