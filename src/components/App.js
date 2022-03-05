import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [id, setId] = useState("text");

  function PrintTag() {
    setId("para");
  }
  return (
    <div id="main">
      <button onClick={PrintTag} id={id}>
        Click me
      </button>

      <p>
        {id == "para"
          ? "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
          : " "}
      </p>
    </div>
  );
}

export default App;
