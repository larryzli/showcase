import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      palindrome: "",
      userInput: ""
    };
    this.updateInput = this.updateInput.bind(this);
    this.checkPalindrome = this.checkPalindrome.bind(this);
  }
  updateInput(val) {
    this.setState({
      userInput: val
    });
  }
  checkPalindrome() {
    let backwards = this.state.userInput
      .toLowerCase()
      .split("")
      .reverse()
      .join("");
    if (this.state.userInput.toLowerCase() === backwards) {
      this.setState({
        palindrome: "true"
      });
    } else {
      this.setState({
        palindrome: "false"
      });
    }
  }
  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input
          onChange={e => this.updateInput(e.target.value)}
          className="inputLine"
        />
        <button onClick={this.checkPalindrome} className="confirmationButton">
          Check
        </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
