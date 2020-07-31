import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Testapp from './Testapp';
import Game from './TicTacToe'
import * as serviceWorker from './serviceWorker';

/////////////////////////

function getGreeting(user) {
  if (user) {
    return <div>Hello, {formatName(user)}!</div>;
  }
  return <h1>Hello, Stranger.</h1>;
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

// function taking a props object
function testProps(props) {
  console.log(props)
  return <div> Message: {props.message} </div>;
}

const user = {
  firstName: 'Amol',
  lastName: 'Perez',
  message: 'My Name is XYZ'
};


// return a component which is formed using functions
// testProps() component used directly not working -- ?? <testProps> ... </testProps>
const element = (
  <div style={{'color': 'red'}}>
    Hello, {getGreeting(user)}!
    <h1> Gopika </h1>
    <button> Click Me </button>
    <testProps message="-- my message --" />
    <h2> {testProps(user)} </h2>
  </div>
);

/////////////////////////

let city = "Madrid";

/////////////////////////

// return a function directly -> compiles fine -> NOT WORKING as expected
const hello0 = () => (
  <div>
    <h1> Welcome to React </h1>
  </div>
);

/////////////////////////

// "props" object
// return a function directly -> compiles fine -> NOT WORKING as expected
const hello1 = (props) => {
  console.log(props)
  return (
    <div>
      <h1> Welcome to {props.library} </h1>
      <p> I am {props.message} </p>
    </div>
  )
};

ReactDOM.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,

  // element,
  // <h1 className="heading"> hello {city} </h1>,
  // hello0,
  // <hello1 library="React" message="Enjoy!" />,
  // <React.StrictMode>
  //   <Testapp />,
  // </React.StrictMode>,
  <Game />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
