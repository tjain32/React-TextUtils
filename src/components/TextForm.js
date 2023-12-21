import { useState, useSyncExternalStore } from "react";
import React from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowerClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  }
  const handleCopy = () =>
  {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => 
  {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const [text, setText] = useState();
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            placeholder="Enter your text"
            id="myBox"
            rows="8"
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* (text.split(" ").length)} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div> 
    </>
  );
  }