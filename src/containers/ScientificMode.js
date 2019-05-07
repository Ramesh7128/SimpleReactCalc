import React, { Component } from 'react';

class ScientificMode extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="scientific-section">
                <button onClick={this.props.handleScientificMode}>Scientific Mode</button>
            </div>
        );
    }
}
 
export default ScientificMode;