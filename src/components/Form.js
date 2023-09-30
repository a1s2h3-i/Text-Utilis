import React, { useState } from "react";
import "../css/form.css";

export default function Form() {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const changeToUppercase = () => {
    setText(text.toUpperCase());
  };
  const changeToLowercase = () => {
    setText(text.toLowerCase());
  };
  const clearText = () => {
    setText("");
  };
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const textReverse = () => {
    let newText = text.split(" ").reverse().join(" ");
    setText(newText);
  };
  const textMirror = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
  };
  const copyText = () => {
    let newText = document.getElementById("form");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
  };
  return (
    <>
      <div className="column-flex container">
        <h2>
          <label htmlFor="form" className="form-label">
            Enter text to analyse
          </label>
        </h2>
        <textarea
          id="form"
          cols="30"
          rows="10"
          placeholder="Enter text here"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="flex container btnarea">
        <button
          disabled={text.length === 0}
          className="btn btn-blue"
          onClick={changeToUppercase}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-blue"
          onClick={changeToLowercase}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-blue"
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-blue"
          onClick={copyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-blue"
          onClick={removeExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-blue"
          onClick={textReverse}
        >
          Reverse Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-blue"
          onClick={textMirror}
        >
          Mirror Text
        </button>
      </div>
      <div className="change">
      <div className="column-flex container summary">
        <h2>Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
      </div>
    </>
  );
}
