import React from "react";
import "../styles/form.css";

import {
  Button,
  Checkbox,
  Input,
  Page,
  Radio,
  Select,
  Toolbar,
  ToolbarButton,
  BackButton
} from "react-onsenui";

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
  setSelect,
}) => (
  <Page
    id="form"
    modifier="material"
    contentStyle={{ display: "flex", justifyContent: "center" }}
  >
    <form className="form">
      <h1>Subscription</h1>
      <label className="label">Email</label>
      <Input
        float
        id="text"
        onChange={e => setInputText(e.target.value)}
        modifier="material"
        placeholder="Input Text"
      />
      <label className="label">Birthday</label>
      <Input
        float
        id="date"
        type="date"
        onChange={e => setDate(e.target.value)}
        modifier="material"
      />
      <label className="label">Subscription Type</label>
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
        <option value="Six Month">Six Month</option>
        <option value="One Year">One Year</option>
      </Select>
      <div className="check-container">
        <label className="label">Recieve Email Updates?</label>
        <Checkbox
          id="check"
          modifier="material"
          onChange={() => setCheck(check === "out" ? "in" : "out")}
        />
      </div>
      <Button onClick={()=>{}}modifier="cta" ripple className="submit">
        View Details
      </Button>
    </form>
  </Page>
);

export default Form;
