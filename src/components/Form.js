import React from "react";
import "../styles/form.css";

import { Button, Checkbox, Input, Page, Radio, Select } from "react-onsenui";

const Form = ({
  check,
  currentIndex,
  tabIndex,
  radioOptions,
  select,
  setCheck,
  setTabIndex,
  setDate,
  setInputText,
  setRadio,
  setSelect
}) => (
  <Page
    modifier="material"
    contentStyle={{ display: "flex", justifyContent: "center" }}
  >
    <form className="form">
      <h1>Edit Profile</h1>
      <label className="label">Email</label>
      <Input
        id="text"
        onChange={e => setInputText(e.target.value)}
        modifier="material"
        placeholder="example@email.com"
      />
      <label className="label">Birthday</label>
      <Input
        id="date"
        type="date"
        onChange={e => setDate(e.target.value)}
        modifier="material"
      />
      <label className="label">Subscription Length</label>
      <div id="radio-section">
        {radioOptions.map((option, i) => (
          <Radio
            key={i}
            name="options"
            value={option}
            onChange={e => setRadio(e.target.value)}
            modifier="material"
          >
            {option}
          </Radio>
        ))}
      </div>
      <label className="label">Subsription Length</label>
      <Select
        id="select"
        modifier="material"
        value={select}
        placeholder={select}
        onChange={e => setSelect(e.target.value)}
      >
        <option value={null} default>
          Select A Value
        </option>
        <option value="Trial">Trial</option>
        <option value="Six Months">Six Months</option>
        <option value="One Year">One Year</option>
      </Select>
      <div className="check-container">
        <label className="label">Receive Email Updates?</label>
        <Checkbox
          id="check"
          modifier="material"
          onChange={e => setCheck(e.target.value)}
        />
      </div>
      <Button
        className="button"
        modifier="material"
        onClick={() => setTabIndex(tabIndex === 0 ? 1 : 0)}
      >
        Submit
      </Button>
    </form>
  </Page>
);

export default Form;
