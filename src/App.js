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
    result: 0,
  };

  // TODO: Samo za debugging, ne zaboravi da ukloniš
  componentDidUpdate() {
    console.log(this.state);
  }

  handleChangeFrom = (e) => {
    this.setState({ from: e.target.value });
  };

  handleChangeTo = (e) => {
    this.setState({ to: e.target.value });
  };

  fetchResult = async () => {
    const response = await fetch(
      `http://data.fixer.io/api/latest?access_key=b92aa59d3778c66ab0bf76f8eca3a032&base=${this.state.from}&symbols=${this.state.to}`
    );
    const data = await response.json();
    this.setState({ result: this.state.amount * data.rates[this.state.to] });
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
        <button onClick={this.fetchResult}>Convert</button>
        <p>
          {this.state.amount} {this.state.from} = {this.state.result}{" "}
          {this.state.to}
        </p>
      </div>
    );
  }
}
