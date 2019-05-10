import React, { Component } from "react";

class Action extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var classTag = this.props.scientificMode
      ? "action-section-scientific"
      : "action-section";
    return (
      <div
        className={classTag}
        onClick={event => this.props.handleAction(event.target.dataset.action)}
      >
        <div className="key-item" data-action="+">
          <label data-action="+">Add(+)</label>
        </div>
        <div data-action="-" className="key-item">
          <label data-action="-">Subract(-)</label>
        </div>
        <div data-action="*" className="key-item">
          <label data-action="*">Multiply(*)</label>
        </div>
        <div data-action="/" className="key-item">
          <label data-action="/">Divide(/)</label>
        </div>
        {this.props.scientificMode && (
          <React.Fragment>
            <div data-action="-/+" className="key-item">
              <label data-action="-/+">-/+</label>
            </div>
            <div data-action="^2" className="key-item">
              <label data-action="^2">^2</label>
            </div>
            <div data-action="sqrt" className="key-item">
              <label data-action="sqrt">sqrt</label>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Action;
