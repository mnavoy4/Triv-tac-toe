import React, { Component } from 'react';

export default class Question extends Component {

  decodeHTML = (html) => {
    let $textarea = document.createElement('textarea');
    $textarea.innerHTML = html;
    return $textarea.value;
  }
  render(){
    const question = this.decodeHTML(this.props.question.question);
    const correctAnswer = this.decodeHTML(this.props.question.correct_answer);
    const incorrectAnswers = this.props.question.incorrect_answers.split(",");
    console.log(incorrectAnswers[0])
    const incorrectAnswer1 = this.decodeHTML(this.props.question.incorrect_answers[0]);
    const incorrectAnswer2 = this.decodeHTML(this.props.question.incorrect_answers[1]);
    const incorrectAnswer3 = this.decodeHTML(this.props.question.incorrect_answers[2]);

    return(
      <div className='question'>
        <div className='question-bubble'>{question}</div>
        <br/>
        <div onClick={this.props.determineCorrectAnswer} className='incorrect-answer-bubble'>{incorrectAnswers[0]}</div>
        <div onClick={this.props.determineCorrectAnswer} className='incorrect-answer-bubble'>{incorrectAnswers[1]}</div>
        <div onClick={this.props.determineCorrectAnswer} className='incorrect-answer-bubble'>{incorrectAnswers[2]}</div>
        <div onClick={this.props.determineCorrectAnswer} className='correct-answer-bubble'>{correctAnswer}</div>
      </div>
    )
  }
}
