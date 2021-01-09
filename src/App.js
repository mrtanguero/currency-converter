import React, { Component } from "react";
import Dropdown from "./components/Dropdown";

const options = [
  {
    currency: "Euro",
    code: "EUR",
  },
  {
    currency: "US Dollar",
    code: "USD",
  },
  {
    currency: "British Pound",
    code: "GBP",
  },
  {
    currency: "Serbian Dinar",
    code: "RSD",
  },
];
export default class App extends Component {
  state = {
    amount: "",
    from: "EUR",
    to: "USD",
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  handleChangeFrom = (e) => {
    this.setState({ from: e.target.value });
  };

  handleChangeTo = (e) => {
    this.setState({ to: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.amount}
          onChange={(e) => {
            this.setState({ amount: e.target.value });
          }}
          placeholder="Enter the amount"
        />
        <Dropdown
          options={options}
          label="From"
          selected={this.state.from}
          onChange={this.handleChangeFrom}
        />
        <Dropdown
          options={options}
          label="To"
          selected={this.state.to}
          onChange={this.handleChangeTo}
        />
      </div>
    );
  }
}
