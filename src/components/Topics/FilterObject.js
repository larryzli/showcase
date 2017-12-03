import React, { Component } from "react";

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                { name: "Jimmy Joe", title: "Hack0r", age: 12 },
                { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
                { name: "Carly Armstrong", title: "CEO" }
            ],
            userInput: "",
            filteredArray: []
        };
        this.solveFilterObject = this.solveFilterObject.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }
    updateInput(val) {
        this.setState({
            userInput: val
        });
    }
    solveFilterObject() {
        const arr = this.state.unFilteredArray.filter((val, i, arr) => {
            return !val[this.state.userInput];
        });
        this.setState({
            filteredArray: arr
        });
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">
                    Original:{" "}
                    {JSON.stringify(this.state.unFilteredArray, null, 10)}
                </span>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    className="inputLine"
                />
                <button
                    onClick={this.solveFilterObject}
                    className="confirmationButton"
                >
                    Filter
                </button>
                <span className="resultsBox filterObjectRB">
                    Filtered:{" "}
                    {JSON.stringify(this.state.filteredArray, null, 10)}
                </span>
            </div>
        );
    }
}

export default FilterObject;
