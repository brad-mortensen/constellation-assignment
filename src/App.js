import React, { useState } from "react";
import { Tabbar, Tab } from "react-onsenui";

import Form from "./components/Form";
import Display from "./components/Display";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [date, setDate] = useState("");
  const [check, setCheck] = useState("out");
  const [radio, setRadio] = useState("");
  const [select, setSelect] = useState("Select A Value");

  const radioOptions = ["Single", "Pro", "Enterprise"];

  return (
    <Tabbar
      modifier="material"
      swipeable
      renderTabs={() => [
        {
          content: (
            <Form
              key={0}
              check={check}
              radioOptions={radioOptions}
              select={select}
              setCheck={setCheck}
              setDate={setDate}
              setInputText={setInputText}
              setRadio={setRadio}
              setSelect={setSelect}
            />
          ),
          tab: <Tab key={0} label="Update" icon="md-settings" />
        },
        {
          content: (
            <Display
              key={1}
              inputText={inputText}
              date={date}
              check={check}
              radio={radio}
              select={select}
            />
          ),
          tab: <Tab key={1} label="View" icon="md-home" />
        }
      ]}
    />
  );
};

export default App;
