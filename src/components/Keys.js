import React, { Component } from "react";

function Keys(props) {
  return (
    <div
      className="keys-section"
      onClick={event => props.handleNumberInputs(event.target.dataset.key)}
    >
      <div className="key-item" data-key="1">
        <label data-key="1">1</label>
      </div>
      <div data-key="2" className="key-item">
        <label data-key="2">2</label>
      </div>
      <div data-key="3" className="key-item">
        <label data-key="3">3</label>
      </div>
      <div data-key="4" className="key-item">
        <label data-key="4">4</label>
      </div>
      <div data-key="5" className="key-item">
        <label data-key="5">5</label>
      </div>
      <div data-key="6" className="key-item">
        <label data-key="6">6</label>
      </div>
      <div data-key="7" className="key-item">
        <label data-key="7">7</label>
      </div>
      <div data-key="8" className="key-item">
        <label data-key="8">8</label>
      </div>
      <div data-key="9" className="key-item">
        <label data-key="9">9</label>
      </div>
    </div>
  );
}

export default Keys;
