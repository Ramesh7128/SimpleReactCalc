import React, { Component } from "react";
import ThemeContext from "../containers/Theme";

function DarkMode(props) {
  return (
    <ThemeContext.Consumer>
      {value => (
        <div className="darkmode-section">
          {value.darkMode ? (
            <button onClick={value.toggleDarkMode}>Light Mode</button>
          ) : (
            <button onClick={value.toggleDarkMode}>Dark Mode</button>
          )}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default DarkMode;
