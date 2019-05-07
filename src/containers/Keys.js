import React, { Component } from 'react';


class Keys extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="keys-section">
                <div className='key-item'>
                    <label>1</label>
                </div>
                <div className='key-item'>
                    <label>2</label>
                </div>
                <div className='key-item'>
                    <label>3</label>
                </div>
                <div className='key-item'>
                    <label>4</label>
                </div>
                <div className='key-item'>
                    <label>5</label>
                </div>
                <div className='key-item'>
                    <label>6</label>
                </div>
                <div className='key-item'>
                    <label>7</label>
                </div>
                <div className='key-item'>
                    <label>8</label>
                </div>
                <div className='key-item'>
                    <label>9</label>
                </div>
            </div>
        );
    }
}

export default Keys;