import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  handleIncrement() {
    console.log("Increment Clicked");
  }
  render() {
    return (
      <div>
        <span classNmae={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
