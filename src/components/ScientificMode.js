import React, { Component } from "react";

function ScientificMode(props) {
  return (
    <div className="scientific-section">
      <button onClick={props.handleScientificMode}>Scientific Mode</button>
    </div>
  );
}

export default ScientificMode;
