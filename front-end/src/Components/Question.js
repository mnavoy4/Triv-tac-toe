import React, { Component } from 'react';
import CorrectAnswer from './CorrectAnswer';
import IncorrectAnswer from './IncorrectAnswer';

export default class Question extends Component {

  render(){
    console.log(this.props);
    return(
      <div className='question'>
        <div className='question-bubble'>Question</div>
        <br/>
        <div onClick={this.props.determineCorrectAnswer} className='incorrect-answer-bubble'>Incorrect</div>
        <div onClick={this.props.determineCorrectAnswer} className='incorrect-answer-bubble'>Incorrect</div>
        <div onClick={this.props.determineCorrectAnswer} className='incorrect-answer-bubble'>Incorrect</div>
        <div onClick={this.props.determineCorrectAnswer} className='correct-answer-bubble'>Correct</div>
      </div>
    )
  }
}