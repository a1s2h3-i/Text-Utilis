import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  const [mode, setmode] = useState("Night");
  const toggleMode = () => {
    if (mode === "Light") {
      setmode("Night");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("form").style.backgroundColor = "white"
      document.getElementById("form").style.color = "black"
    } else {
      setmode("Light");
      document.body.style.backgroundColor = "#24094d";
      document.body.style.color = "white";
      document.getElementById("form").style.backgroundColor = "#24094d"
      document.getElementById("form").style.color = "white"
    }
  };
  return (
    <>
      <Navbar modeChangeFunction={toggleMode} backgroundMode={mode} />
      <Form />
    </>
  );
}

export default App;
