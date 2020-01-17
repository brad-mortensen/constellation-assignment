import React from "react";

import { Page } from "react-onsenui";

const Display = ({ inputText, date, radio, check, select }) => (
  <Page>
    {inputText}
    {date}
    {radio}
    {check}
    {select}
  </Page>
);

export default Display;
