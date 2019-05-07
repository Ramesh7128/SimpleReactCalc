import React, { Component } from 'react';

class Action extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        var classTag = this.props.scientificMode? 'action-section-scientific': 'action-section';
        return (
            <div className={classTag} onClick={(event)=> console.log(event.target.dataset.action)}>
                <div className='key-item'>
                    <label data-action='+'>Add(+)</label>
                </div>
                <div className='key-item'>
                    <label data-action='-'>Subract(-)</label>
                </div>
                <div className='key-item'>
                    <label data-action='*'>Multiply(*)</label>
                </div>
                <div className='key-item'>
                    <label data-action='/'>Divide(/)</label>
                </div>
                {this.props.scientificMode &&
                    <React.Fragment>
                        <div className='key-item'>
                            <label>-/+</label>
                        </div>
                        <div className='key-item'>
                            <label>^2</label>
                        </div>
                        <div className='key-item'>
                            <label>sqrt</label>
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default Action;