import React from "react";
import "../styles/display.css";

import { Page } from "react-onsenui";

const Display = ({ inputText, date, radio, check, select }) => (
  <Page>
    <div className="display">
      <label className="label">Text:</label>
      {inputText}
      <label className="label">Date:</label>
      {date}
      <label className="label">Radio:</label>
      {radio}
      <label className="label">Opted?:</label>
      <h1>{check}</h1>
      <label className="label">Option:</label>
      {select === "Select A Value" ? "" : select}
    </div>
  </Page>
);

export default Display;
