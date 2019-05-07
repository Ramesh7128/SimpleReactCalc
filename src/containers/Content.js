import React, { Component } from 'react';
import Result from './Result';
import KeyBoard from './KeyBoard';
import ScientificMode from './ScientificMode';
import DarkMode from './DarkMode';
import Keys from './Keys';
import Action from './Action';
import SpKeys from './SpKeys';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scientificMode: false,
            darkMode: false,
            result: ''
        }
        this.handleScientificMode = this.handleScientificMode.bind(this);
    }

    handleScientificMode() {
        console.log(this.state.scientificMode);
        this.setState((prevState) => ({
            scientificMode: !prevState.scientificMode
        }));
    }

    render() {
        return (
            <div className="content-section">
                <div className="content-section-wrapper">
                    <Result />
                    <Keys />
                    <Action scientificMode={this.state.scientificMode}/>
                    <SpKeys />
                </div>
                <div className='functional-keys-wrapper'>
                    <ScientificMode handleScientificMode={this.handleScientificMode} />
                    <DarkMode />
                </div>
            </div>
        );
    }
}

export default Content;