import React from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

///////////////////////////////////////
// React Components
///////////////////////////////////////

class TestActionButton extends React.Component {

    render() {
        return (
            <div className="testActionButton">
                <button onClick={this.props.onClick}>{this.props.text}</button>
            </div>
        );
    }
}


class TestappTwo extends React.Component {

    constructor(props) {
        super(props);
        // NOTE: You should not call setState() in the constructor(
        this.state = {
            ipAddress: '127.0.0.1',
            portNumber: '8000',
            eventLog: '',
            displayMessage: '--- dummy ---',
            state: ''  // used to determine if Test is running/not, and set the state of button enable/disable
        };
    }

    handleStartClick = props => {
        // TODO
    }

    handleAbortClick = props => {
        // TODO
    }

    onEventLogChange = (e) => {
        // TODO
    }

    onConnectionStatusChange = (e) => {
        // TODO
    }

    onEventLogTabSelect = (e) => {
        console.log('Tab Selected: Event Log')
    }


    render() {
        // Buttons: Start, Abort
        // Tabs: Event Log,
        // Label/Message Box
        return (
            <div className="buttonPanel">
                <button onClick={this.handleStartClick}> START </button>
                <button onClick={this.handleAbortClick}> ABORT </button>
                <Tabs onSelect={this.onEventLogTabSelect}>
                    <Tab label="Event Log"> {this.state.displayMessage} </Tab>
                    <Tab label="Tab2">Tab 2 content</Tab>
                </Tabs>
            </div>
        )
    }
}


// export this Component so that it can be imported and used in the main()
export default TestappTwo;
