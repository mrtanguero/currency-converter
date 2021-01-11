import React, { Component } from "react";
import "./App.css";

import Dropdown from "./components/Dropdown";
import Message from "./components/Message";

const options = [
  {
    currency: "Euro (EUR)",
    code: "EUR",
  },
  {
    currency: "US Dollar (USD)",
    code: "USD",
  },
  {
    currency: "British Pound (GBP)",
    code: "GBP",
  },
  {
    currency: "Serbian Dinar (RSD)",
    code: "RSD",
  },
];
export default class App extends Component {
  state = {
    amount: "",
    from: "EUR",
    to: "USD",
    result: null,
  };

  handleChangeFrom = (e) => {
    this.setState({ from: e.target.value });
  };

  handleChangeTo = (e) => {
    this.setState({ to: e.target.value });
  };

  fetchResult = async () => {
    if (this.state.amount === "") return;
    if (Number.isNaN(Number(this.state.amount))) {
      this.setState({ result: NaN });
      return;
    }
    this.setState({ result: "loading" });
    try {
      const response = await fetch(
        `https://free.currconv.com/api/v7/convert?q=${this.state.from}_${this.state.to}&compact=ultra&apiKey=c76442b6c7b8eedc11f2`
      );
      const data = await response.json();
      const rate = data[`${this.state.from}_${this.state.to}`];
      this.setState({ result: (this.state.amount * rate).toFixed(2) });
    } catch (error) {
      this.setState({ result: "error" });
      console.error(error.message);
    }
  };

  render() {
    return (
      <div className="ui form container">
        <h1>Currency Converter</h1>
        <div className="field">
          <label>Amount to convert</label>
          <input
            type="text"
            value={this.state.amount}
            onChange={(e) => {
              if (this.state.result !== null) this.setState({ result: null });
              this.setState({ amount: e.target.value });
            }}
            onKeyUp={(e) => {
              console.log(e);
              if (e.key === "Enter") this.fetchResult();
            }}
            placeholder="Enter the amount"
          />
        </div>
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
        <button className="ui violet button" onClick={this.fetchResult}>
          Convert
        </button>
        <Message state={this.state} />
      </div>
    );
  }
}
