import React from "react";

export default function Message({ state }) {
  if (state.result === null) {
    return null;
  } else if (state.result === "loading") {
    return (
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading</div>
      </div>
    );
  } else if (Number.isNaN(state.result)) {
    return (
      <div className="message red">
        <h2>Invalid amount.</h2>
      </div>
    );
  } else if (state.result === "error") {
    return (
      <div className="message red">
        <h2>API call failed. Check console for details.</h2>
      </div>
    );
  } else {
    return (
      <div className="message">
        <h1>
          <span className="amount">{state.amount}</span>
          <span className="currency">{state.from}</span> ={" "}
          <span className="amount">{state.result}</span>
          <span className="currency">{state.to}</span>
        </h1>
      </div>
    );
  }
}
