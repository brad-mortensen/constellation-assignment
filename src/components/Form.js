import React from "react";

import { Input, Checkbox, Radio, Select } from "react-onsenui";

export default () => (
  <>
    <Input
      float
      onChange={() => {}}
      modifier="material"
      placeholder="Input Text"
    />
    <Input type="date" float onChange={() => {}} modifier="material" />
    <Checkbox />
    <Radio />
    <Select />
  </>
);
