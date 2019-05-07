import React, { Component } from 'react';

class SpKeys extends Component {
    state = {}
    render() {
        return (
            <div className="specialkeys-section">
                <div className='key-item'>
                    <label>clear</label>
                </div>
                <div className='key-item'>
                    <label>0</label>
                </div>
                <div className='key-item'>
                    <label>=</label>
                </div>
            </div>
        );
    }
}

export default SpKeys;