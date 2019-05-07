import React, { Component } from 'react';

class DarkMode extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="darkmode-section">
                <button>Dark Mode</button>
            </div>
        );
    }
}
 
export default DarkMode;