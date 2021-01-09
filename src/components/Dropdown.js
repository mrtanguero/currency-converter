import React, { Component } from "react";

export default class Dropdown extends Component {
  renderOptions = (options) => {
    return options.map((cur, i) => {
      return (
        <option key={i} value={cur.code}>
          {cur.currency}
        </option>
      );
    });
  };

  render() {
    return (
      <div>
        <label>
          {this.props.label}
          <select onChange={this.props.onChange} value={this.props.selected}>
            {this.renderOptions(this.props.options)}
          </select>
        </label>
      </div>
    );
  }
}
