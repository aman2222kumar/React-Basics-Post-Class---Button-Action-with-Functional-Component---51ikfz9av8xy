import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [id, setId] = useState("click");
  const [text, settext] = useState(false);
  function PrintTag() {
    if (id == "click") {
      setId("para");
    }
    settext(true);
  }
  return (
    <div id="main">
      <button onClick={PrintTag} id={id}>
        Click me
      </button>

      <p>
        {text
          ? "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
          : " "}
      </p>
    </div>
  );
}

export default App;
