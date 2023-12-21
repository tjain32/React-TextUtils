import { useState} from "react";
import React from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowerClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success");
  }
  const handleCopy = () =>
  {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to clipboard","success");
  }

  const handleExtraSpaces = () => 
  {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaced has been removed","success");
  }
  const [text, setText] = useState('');
  return (
    <>
      <div 
      style={{
        backgroundColor: props.mode==='light'?'white':'#34495E ',
        color: props.mode==='dark'?'white':'#34495E '
      }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            placeholder="Enter your text"
            id="myBox"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode==='light'?'white':'#34495E ',
              color: props.mode==='dark'?'white':'#34495E '
            }}
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
      <div className="container my-3"
      style={{
        backgroundColor: props.mode==='light'?'white':'#34495E ',
        color: props.mode==='dark'?'white':'#34495E '
      }}
      >
        <h2>Your text Summary</h2>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>{0.008* (text.trim() === '' ? 0 : text.match(/\S+/g).length)} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text to preview it here!"}</p>
      </div> 
    </>
  );
  }