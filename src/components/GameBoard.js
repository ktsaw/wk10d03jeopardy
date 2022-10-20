import React, { Component } from "react";
import Button from "./Button.js";

export class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewAnswer: false
    };
    this.toggleViewAnswer = this.toggleViewAnswer.bind(this);
    this.getQuestion = this.getQuestion.bind(this);
  }
  toggleViewAnswer() {
    if (this.state.viewAnswer) {
      this.setState({
        viewAnswer: false
      });
    } else {
      this.setState({
        viewAnswer: true
      });
    }
  }
  getQuestion() {
    this.props.getQuestion();
    this.setState({
      viewAnswer: false
    });
  }
  render() {
    return (
      <div className="gameBoard">
        <Button
          updateScore={this.props.updateScore}
          currentScore={this.props.currentScore}
        />
        <div className="gameQuestions">
          <h2>Let's Play</h2>
          <div className="gameQuestions-buttons">
            <button onClick={this.getQuestion} id="getQuestion-button">
              Get Question
            </button>
          <h2>Category: {this.props.data.category.title} </h2>
          <h2>Points: {this.props.updateScore}</h2>
          <h2>Answer: {this.props.data.question}</h2>
          
            <button onClick={this.toggleViewAnswer} id="toggleAnswer-button">
              Click to Reveal Question
            </button>
          </div>
          {this.state.viewAnswer ? (
            <p> {this.props.data.answer} </p>
          ) : (
            <p>?????????</p>
          )}
        </div>
      </div>
    );
  }
}

export default GameBoard;