import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
    this.solveEvenAndOdd = this.solveEvenAndOdd.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }
  updateInput(val) {
    this.setState({
      userInput: val
    });
  }
  solveEvenAndOdd() {
    const arr = this.state.userInput.split(",");
    const evenArr = [];
    const oddArr = [];
    for (let i in arr) {
      if (parseInt(arr[i], 10) % 2 === 0) {
        evenArr.push(arr[i]);
      } else {
        oddArr.push(arr[i]);
      }
    }
    this.setState({
      evenArray: evenArr,
      oddArray: oddArr
    });
  }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          onChange={e => this.updateInput(e.target.value)}
          className="inputLine"
        />
        <button onClick={this.solveEvenAndOdd} className="confirmationButton">
          Split
        </button>
        <span className="resultsBox">
          Evens: [{this.state.evenArray.join(",") || " "}]
        </span>
        <span className="resultsBox">
          Odds: [{this.state.oddArray.join(",") || " "}]
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
