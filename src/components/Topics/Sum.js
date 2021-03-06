import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
    this.updateNumber1 = this.updateNumber1.bind(this);
    this.updateNumber2 = this.updateNumber2.bind(this);
    this.solveSum = this.solveSum.bind(this);
  }
  updateNumber1(val1) {
    this.setState({
      number1: parseInt(val1, 10)
    });
  }
  updateNumber2(val2) {
    this.setState({
      number2: parseInt(val2, 10)
    });
  }
  solveSum() {
    this.setState({
      sum: this.state.number1 + this.state.number2
    });
  }
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          type="number"
          onChange={e => {
            this.updateNumber1(e.target.value);
          }}
          className="inputLine"
        />
        <input
          type="number"
          onChange={e => {
            this.updateNumber2(e.target.value);
          }}
          className="inputLine"
        />
        <button onClick={this.solveSum} className="confirmationButton">
          Sum
        </button>
        <span className="resultsBox">Sum: {this.state.sum || "TBD"}</span>
      </div>
    );
  }
}

export default Sum;
