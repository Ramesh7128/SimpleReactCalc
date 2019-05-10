import React, { Component } from 'react';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className='result-section'>
                {this.props.resultExpression}             
            </div>
        );
    }
}
 
export default Result;