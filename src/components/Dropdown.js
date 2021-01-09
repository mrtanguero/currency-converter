import React from "react";

export default function Dropdown({ options, label, onChange, selected }) {
  const optionList = options.map((cur, i) => {
    return (
      <option key={i} value={cur.code}>
        {cur.currency}
      </option>
    );
  });

  return (
    <div>
      <label>
        {label}
        <select onChange={onChange} value={selected}>
          {optionList}
        </select>
      </label>
    </div>
  );
}
