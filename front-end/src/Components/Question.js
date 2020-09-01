import React, { Component } from 'react';
import CorrectAnswer from './CorrectAnswer';
import IncorrectAnswer from './IncorrectAnswer';

export default class Question extends Component {

  handleClick = (event) => {
    
  }

  determineCorrectAnswer = () => {

  }
  render(){
    return(
      <div className='question'>
        <div className='question-bubble'>Question</div>
        <br/>
        <div className='answer-bubble'>Incorrect</div>
        <div className='answer-bubble'>Incorrect</div>
        <div className='answer-bubble'>Incorrect</div>
        <div className='answer-bubble'>Correct</div>
      </div>
    )
  }
}