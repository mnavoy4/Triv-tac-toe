import React, { Component } from 'react';

export default class Square extends Component {

  canMove = () => {
    if (this.props.correctAnswer) {
      return true
    } else {
      return false
    }
  }

  render(){
    console.log(this.canMove());
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}