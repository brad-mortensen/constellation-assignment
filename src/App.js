import React, { useState } from "react";
import { Page, Button } from "react-onsenui";

import Form from "./components/Form";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [date, setDate] = useState("");
  const [check, setCheck] = useState(false);
  const [radio, setRadio] = useState("");

  const radioOptions = ["First", "Second", "Third"];

  return (
    <Page contentStyle={{ padding: 40 }}>
      <Form
        setInputText={setInputText}
        setDate={setDate}
        check={check}
        setCheck={setCheck}
        setRadio={setRadio}
        radioOptions={radioOptions}
      />
    </Page>
  );
};

export default App;
