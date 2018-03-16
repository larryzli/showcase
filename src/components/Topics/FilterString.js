import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy"
      ],
      filteredArray: [],
      userInput: ""
    };
    this.updateInput = this.updateInput.bind(this);
    this.solveFilterString = this.solveFilterString.bind(this);
  }
  updateInput(val) {
    this.setState({
      userInput: val
    });
  }
  solveFilterString() {
    const arr = this.state.unFilteredArray.filter(val => {
      return val.includes(this.state.userInput);
    });
    this.setState({
      filteredArray: arr
    });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter Array</h4>
        <span className="puzzleText">
          Names: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          onChange={e => this.updateInput(e.target.value)}
          className="inputLine"
        />
        <button
          onClick={e => this.solveFilterString()}
          className="confirmationButton"
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
