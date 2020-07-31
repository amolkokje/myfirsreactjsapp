import React from 'react';
import logo from './logo.svg';
import './App.css';

// Tutorial: https://reactjs.org/tutorial/tutorial.html

function clickAlert() {
    alert('click alert');
}

/*
In React, function components are a simpler way to write components that only contain a render method and don’t have their own state. Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered. Function components are less tedious to write than classes, and many components can be expressed this way.
*/

// Function Component
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

/*
// React Component Class
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <button className="square"
            onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}
*/

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();  //.slice() creates a copy
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        // based on value of xIsNext, change what value the Square should have
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        //squares[i] = 'X';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,  // toggle xIsNext so the X/0 is updated
        });
    }


    renderSquare(i) {
        // utility method to pass props from parent->child component
        // 'value' passed as props to component 'Square'
        return <Square
                    value={this.state.squares[i]}
                    onClick={() => this.handleClick(i)}
                />;
    }

  render() {
    //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    }
    else
    {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

export default Game;
