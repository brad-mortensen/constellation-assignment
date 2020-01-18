import React, { useState } from "react";
import { Page, Button, Tabbar, Tab } from "react-onsenui";

import Form from "./components/Form";
import Display from "./components/Display";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [date, setDate] = useState("");
  const [check, setCheck] = useState(false);
  const [radio, setRadio] = useState("");
  const [select, setSelect] = useState("Select A Value");
  const [currentIndex, setCurrentIndex] = useState(0);

  const radioOptions = ["First", "Second", "Third"];

  return (
    <Page>
      <Tabbar
        onPreChange={() => {
          setCurrentIndex(currentIndex === 0 ? 1 : 0);
          console.log(currentIndex);
        }}
        swipeable
        modifier="material"
        position="top"
        index={currentIndex}
        renderTabs={() => [
          {
            content: (
              <Form
                key={0}
                active={currentIndex === 0}
                check={check}
                currentIndex={currentIndex}
                radioOptions={radioOptions}
                select={select}
                setCheck={setCheck}
                setCurrentIndex={setCurrentIndex}
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
                active={currentIndex === 1}
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
    </Page>
  );
};

export default App;
