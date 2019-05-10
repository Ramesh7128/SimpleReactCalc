import React, { Component } from 'react';

class SpKeys extends Component {
    state = {}
    render() {
        return (
            <div className="specialkeys-section" onClick={(event) => this.props.handleNumberInputs(event.target.dataset.key)}>
                <div className='key-item' data-key='clear'>
                    <label data-key='clear'>clear</label>
                </div>
                <div className='key-item' data-key='0'>
                    <label data-key='0'>0</label>
                </div>
                <div className='key-item' data-key='='>
                    <label data-key='='>=</label>
                </div>
            </div>
        );
    }
}

export default SpKeys;