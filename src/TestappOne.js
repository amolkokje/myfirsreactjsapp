import React from 'react';
import logo from './logo.svg';
import './App.css';

// REF:
// https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf
// https://stackoverflow.com/questions/52396601/passing-value-of-input-field-to-parent-component-in-react


///////////////////////////////////////
// React Components
///////////////////////////////////////

class BoxComponent extends React.Component {

    render() {
        //const { value } = this.props // destructuring
        return (
            <div className="wrapper">
                <div className="firstBox">
                    <label htmlFor="text">IP Address: </label>
                    <input type="text" name="ipAddress" onChange={this.props.onIpAddressChange} value={this.props.ipadd} />

                    <label htmlFor="text">Port Number: </label>
                    <input type="text" name="portNumber" onChange={this.props.onPortNumberChange} value={this.props.port} />

                    <button onClick={this.props.onClick}>Update Network Config</button>


                </div>
            </div>
        );
    }
}


class TestappOne extends React.Component {

    constructor(props) {
        super(props);
        // NOTE: You should not call setState() in the constructor(
        this.state = {
            ipAddress: '127.0.0.1',
            portNumber: '8000',
        };

    }

    // Button Click Events
    handleUpdateNetworkConfigClick = props => {
        const ipAddress = this.state.ipAddress
        const portNumber = this.state.portNumber
        // PLACEHOLDER FOR ANY OTHER ACTIONS ON BUTTON PRESS
        console.log('** Button Click: ipAddress=' + ipAddress + ', portNumber=' + portNumber)


        // Ref: https://javascript.info/websocket
        // let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");
        let server_url = `ws://${ipAddress}:${portNumber}`;
        let socket = new WebSocket(server_url);
        socket.onopen = function(e) {
            alert("[open] Connection established");
            alert(`Sending to server: ${server_url}`);
            socket.send("My name is John");
        };

        socket.onmessage = function(event) {
            alert(`[message] Data received from server: ${event.data}`);
        };

        socket.onclose = function(event) {
            if (event.wasClean) {
                alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
            } else {
                // e.g. server process killed or network down
                // event.code is usually 1006 in this case
                alert('[close] Connection died');
            }
        };

        socket.onerror = function(error) {
            alert(`[error] ${error.message}`);
        };
    }

    // EXAMPLE: Bind property in Child component to Parent component
    onIpAddressChange = (e) => {
        this.setState({ipAddress: e.target.value})
        console.log('Updated ipAddress textbox: ' + this.state.ipAddress)
    }

    onPortNumberChange = (e) => {
        this.setState({portNumber: e.target.value})
        console.log('Updated portNumber textbox: ' + this.state.portNumber)
    }



   render(){
        return (
            <div className="App">
                <BoxComponent
                    ipadd = {this.state.ipAddress}
                    port = {this.state.portNumber}
                    onIpAddressChange = {this.onIpAddressChange}
                    onPortNumberChange = {this.onPortNumberChange}
                    onClick = {this.handleUpdateNetworkConfigClick}
                />

            </div>
        );
    }
  }

// export this Component so that it can be imported and used in the main()
export default TestappOne;
