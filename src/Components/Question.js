import React, { Component } from 'react';

export default class Question extends Component {
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