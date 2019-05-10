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
            resultExpression: '0',
            operation: '',
            computedValue: '',
            actionableValue: '',
        }
        this.handleScientificMode = this.handleScientificMode.bind(this);
        this.handleNumberInputs = this.handleNumberInputs.bind(this);
        this.handleAction = this.handleAction.bind(this);
    }

    handleScientificMode() {
        console.log(this.state.scientificMode);
        this.setState((prevState) => ({
            scientificMode: !prevState.scientificMode
        }));
    }

    handleAction(clickValue) {
        console.log('handle this expression.', clickValue);
        if (this.state.operation) {
            let resultExpression = this.state.resultExpression.concat(clickValue);
            let result = 0;
            switch (this.state.operation) {
                case "+":
                    result = Number(this.state.computedValue) + Number(this.state.actionableValue);
                    this.setState({
                        resultExpression: resultExpression,
                        computedValue: String(result),
                        actionableValue: '',
                        operation: clickValue
                    });
                    break;
                case "-":
                    result = Number(this.state.computedValue) - Number(this.state.actionableValue);
                    this.setState({
                        resultExpression: resultExpression,
                        computedValue: String(result),
                        actionableValue: '',
                        operation: clickValue
                    });
                    break;
                case "*":
                    result = Number(this.state.computedValue) * Number(this.state.actionableValue);
                    this.setState({
                        resultExpression: resultExpression,
                        computedValue: String(result),
                        actionableValue: '',
                        operation: clickValue
                    });
                    break;
                case "/":
                    result = Number(this.state.computedValue) / Number(this.state.actionableValue);
                    this.setState({
                        resultExpression: resultExpression,
                        computedValue: String(result),
                        actionableValue: '',
                        operation: clickValue
                    });
                    break;
                default:
                    break;
            }
        } else {
            let result = '';
            switch (clickValue) {
                case "-/+":
                    this.setState(prevState => ({
                        resultExpression: String(-1 * Number(prevState.computedValue)),
                        computedValue: String(-1 * Number(prevState.computedValue)),
                        actionableValue: '',
                        operation: ''
                    }));
                    break;
                case "^2":
                    this.setState(prevState => ({
                        resultExpression: String(Number(prevState.computedValue) * Number(prevState.computedValue)),
                        computedValue: String(Number(prevState.computedValue) * Number(prevState.computedValue)),
                        actionableValue: '',
                        operation: ''
                    }));
                    break;
                case "sqrt":
                    this.setState(prevState => ({
                        resultExpression: String(Math.sqrt(Number(prevState.computedValue))),
                        computedValue: String(Math.sqrt(Number(prevState.computedValue))),
                        actionableValue: '',
                        operation: ''
                    }));
                    break;
                default:
                    let resultExpression = this.state.resultExpression.concat(clickValue);
                    this.setState({
                        resultExpression: resultExpression,
                        operation: clickValue,
                    });
            }
        }
    }

    handleNumberInputs(clickValue) {
        console.log(clickValue);
        let result = 0;
        switch (clickValue) {
            case "=":
                if (this.state.operation) {
                    switch (this.state.operation) {
                        case "+":
                            result = Number(this.state.computedValue) + Number(this.state.actionableValue);
                            this.setState({
                                resultExpression: String(result),
                                computedValue: String(result),
                                actionableValue: '',
                                operation: ''
                            });
                            break;
                        case "-":
                            result = Number(this.state.computedValue) - Number(this.state.actionableValue);
                            this.setState({
                                resultExpression: String(result),
                                computedValue: String(result),
                                actionableValue: '',
                                operation: ''
                            });
                            break;
                        case "*":
                            result = Number(this.state.computedValue) * Number(this.state.actionableValue);
                            this.setState({
                                resultExpression: String(result),
                                computedValue: String(result),
                                actionableValue: '',
                                operation: ''
                            });
                            break;
                        case "/":
                            result = Number(this.state.computedValue) / Number(this.state.actionableValue);
                            this.setState({
                                resultExpression: String(result),
                                computedValue: String(result),
                                actionableValue: '',
                                operation: ''
                            });
                            break;
                        default:
                            break;
                    }
                } else {
                    this.setState({
                        resultExpression: this.state.resultExpression,
                        computedValue: Number(this.state.resultExpression),
                        actionableValue: '',
                        operation: ''
                    })
                }
                break;
            case "clear":
                this.setState({
                    resultExpression: '0',
                    computedValue: '',
                    actionableValue: '',
                    operation: ''
                });
                break;
            default:
                console.log('Check if it goes here');
                if (this.state.operation) {
                    this.setState(prevState => ({
                        actionableValue: prevState.actionableValue.concat(clickValue),
                        resultExpression: prevState.resultExpression.concat(clickValue)
                    }));
                } else {
                    this.setState(prevState => ({
                        computedValue: prevState.computedValue.concat(clickValue),
                        resultExpression: prevState.resultExpression.concat(clickValue)
                    }));
                }

        }
    }

    render() {
        return (
            <div className="content-section">
                <div className="content-section-wrapper">
                    <Result resultExpression={this.state.resultExpression} />
                    <Keys handleNumberInputs={this.handleNumberInputs} handleAction={this.handleAction} />
                    <Action scientificMode={this.state.scientificMode} handleAction={this.handleAction} />
                    <SpKeys handleNumberInputs={this.handleNumberInputs} handleAction={this.handleAction} />
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