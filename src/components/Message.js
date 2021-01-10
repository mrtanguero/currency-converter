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
        <h2>Samo validni brojevi mogu biti konvertovani.</h2>
      </div>
    );
  } else if (state.result === "error") {
    return (
      <div className="message red">
        <h2>Problem sa API pozivom.</h2>
      </div>
    );
  } else {
    return (
      <div className="message">
        <h1>
          {state.amount}
          {state.from} = {state.result}
          {state.to}
        </h1>
      </div>
    );
  }
}
