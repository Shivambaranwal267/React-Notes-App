import React from "react";

export default function Header({ setDarkMode }) {
  return (
    <div className="header">
      <h1>React Notes App</h1>

      <label
        className="switch">
        <input type="checkbox" onClick={() => setDarkMode((previousState) => !previousState)}/>
        <span className="slider"></span>
      </label>
    </div>
  );
}
