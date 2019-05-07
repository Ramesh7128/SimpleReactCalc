import React, { Component } from 'react';
import Keys from './Keys';
import Action from './Action';
import SpKeys from './SpKeys';


class KeyBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className='keyboard-section'>
                <Keys />
                <Action />
                <SpKeys />
            </div>
        );
    }
}
 
export default KeyBoard;