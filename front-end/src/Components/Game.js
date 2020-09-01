import React, { Component } from 'react';
import Board from './Board';
import Question from './Question'

export default class Game extends Component {

  state = {
    questions: [],
    stepNumber: 0,
    xIsNext: true,
    history: [{
      squares: Array(9).fill(null)
    }],
    correctAnswer: false,
    answered: false,
    renderedQuestion: null
  }

  componentDidMount(){
    fetch('http://localhost:3000/trivia')
      .then(response => response.json())
      .then(questions => this.setState({
        questions: questions 
      }))
  }

  determineCorrectAnswer = (event) => {
    if (event.target.classList.value == 'incorrect-answer-bubble') {
      this.setState({
        correctAnswer: false
      })
      } else {
      this.setState({
        correctAnswer: true
      })
    };
  }

  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  handleClick(squareNumber) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[squareNumber]) {
      return;
    }
    squares[squareNumber] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      correctAnswer: false,
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  render(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

  return (
    <div className="game">
      <div class="flex-container">
      <header>
      <h1>Triv Tac Toe</h1>
      </header>
      <main>
      {this.state.questions.length ? 
        <Question question={this.state.questions[0]} determineCorrectAnswer={this.determineCorrectAnswer} /> :
        null
      }
      <div className="game-board">
        <Board
          correctAnswer={this.state.correctAnswer}
          squares={current.squares}
          onClick={event => this.state.correctAnswer ? this.handleClick(event) : null}
        />
        </div>
        <div className='game-info'>
          <div>{status}</div>
        </div>
        </main>
      </div>
    </div>
  );
}
}
