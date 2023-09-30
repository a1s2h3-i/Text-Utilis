import React from "react";
import "../css/navbar.css";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar space-between">
        <div className="navlink">
          <a className="homeLink" href="/Textutils">
            TextUtils
          </a>
        </div>
        <button
          id="darkModeEnablerDisabler"
          onClick={props.modeChangeFunction}
        >Enable {props.backgroundMode}Mode</button>
      </nav>
    </>
  );
}
