import React, { useState } from "react";
import { Page, Button, Tabbar, Tab } from "react-onsenui";
import "./app.css";
import Form from "./components/Form";
import Display from "./components/Display";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [date, setDate] = useState("");
  const [check, setCheck] = useState("out");
  const [radio, setRadio] = useState("");
  const [select, setSelect] = useState("Select A Value");

  const radioOptions = ["First", "Second", "Third"];

  return (
    <div className="app">
      <Form
        check={check}
        radioOptions={radioOptions}
        select={select}
        setCheck={setCheck}
        setDate={setDate}
        setInputText={setInputText}
        setRadio={setRadio}
        setSelect={setSelect}
      />
      {/* <Display
        inputText={inputText}
        date={date}
        check={check}
        radio={radio}
        select={select}
      /> */}
    </div>
  );
};

export default App;
