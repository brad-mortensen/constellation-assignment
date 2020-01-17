import React from "react";

import { Input, Checkbox, Radio, Select } from "react-onsenui";

const Form = ({
  setInputText,
  setDate,
  setCheck,
  check,
  setRadio,
  radioOptions
}) => (
  <form>
    <Input
      float
      onChange={e => setInputText(e.target.value)}
      modifier="material"
      placeholder="Input Text"
    />
    <Input
      type="date"
      float
      onChange={e => setDate(e.target.value)}
      modifier="material"
    />
    <Checkbox modifier="material" onChange={() => setCheck(!check)} />
    {radioOptions.map(option => (
      <Radio
        name="options"
        value={option}
        onChange={e => setRadio(e.target.value)}
        modifier="material"
      />
    ))}
    <Select />
  </form>
);

export default Form;
