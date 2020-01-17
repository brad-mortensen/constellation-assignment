import React from "react";

import { Button, Checkbox, Input, Page, Radio, Select } from "react-onsenui";

const Form = ({
  check,
  currentIndex,
  radioOptions,
  select,
  setCheck,
  setCurrentIndex,
  setDate,
  setInputText,
  setRadio,
  setSelect
}) => (
  <Page modifier="material">
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
      {radioOptions.map((option, i) => (
        <Radio
          key={i}
          name="options"
          value={option}
          onChange={e => setRadio(e.target.value)}
          modifier="material"
        />
      ))}
      <Select
        modifier="material"
        value={select}
        onChange={e => setSelect(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2nd</option>
        <option value="3">3rd option</option>
      </Select>
      <Button
        modifier="cta"
        type="submit"
        ripple
        onClick={e => {
          setCurrentIndex(currentIndex === 0 ? 1 : 0);
        }}
      >
        View Data
      </Button>
    </form>
  </Page>
);

export default Form;
