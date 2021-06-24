import React, { useState, useRef } from "react";
// import SampleInput from "./SampleInput";
import "./App.css";

function App() {
  const [input, setInput] = useState("default");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleTestClick = () => {
    setInput(inputRef.current!.value);
  };

  return (
    <div className="App">
      <input className="input" type="text" ref={inputRef} />
      <button className="button" onClick={handleTestClick}>
        submit
      </button>
      <div className="show">{input}</div>
    </div>
  );
}

export default App;
