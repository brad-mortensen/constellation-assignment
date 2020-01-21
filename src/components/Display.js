import React from "react";
import "../styles/display.css";

import { Page } from "react-onsenui";

const defaultMessage = <span className="default">No Response Given</span>;

const Display = ({ inputText, date, radio, check, select }) => (
  <Page>
    <div className="display">
      <h1>Profile</h1>
      <label className="label">Email</label>
      <p className="data">{inputText || defaultMessage}</p>
      <label className="label">Birthday</label>
      <p className="data">{date || defaultMessage}</p>
      <label className="label">Subscription Type</label>
      <p className="data">{radio || defaultMessage}</p>
      <label className="label">Subscription Length</label>
      <p className="data">
        {!select
          ? defaultMessage
          : select === "Select A Value"
          ? defaultMessage
          : select}
      </p>
      <label className="label">Receive Email Updates</label>
      <p className="data">{check || defaultMessage}</p>
    </div>
  </Page>
);

export default Display;
