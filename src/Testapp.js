import React from 'react';
import logo from './logo.svg';
import './App.css';


function testFunction(farg, sarg) {
    return <p> F={farg}, S={sarg} </p>;
}

function Testapp() {
  return (
    <div className="Testapp">
      <header className="App-header">
        <p>
          This is my Testapp!
        </p>
      </header>
    </div>
  );
}

export default Testapp;
