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

    // use constructor to define vars that will be used to maintain state of the Component
    constructor(props) {
        super(props);
        // NOTE: You should not call setState() in the constructor(
        this.state = {
            squares: Array(9).fill(null),  // Array to store state of all Squares
            xIsNext: true,  // determines if the next is X or 0
        };
    }


    /**
     * On every Square button click, evaluate the state of the board. If Winner, stop the
     * game and declare the winner. If not, then update value of what is next element to use.
     * @param {any} i: index of the square element
     * @returns {any}: None
     */
    handleClick(i) {
        const squares = this.state.squares.slice();  //.slice() creates a copy
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        // based on value of xIsNext, change what value the Square should have
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        // update all state vars for the squares and the next turn
        // NOTE: Constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead.
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,  // toggle xIsNext so the X/0 is updated
        });
    }


    /**
     * Creates Component Square and sets init value, and onClick callback
     * @param {any} i: Square index
     * @returns {any}: Square component with set value and a onClick callback
     */
    renderSquare(i) {
        // utility method to pass props from parent->child component
        // 'value' passed as props to component 'Square'
        return <Square
                    value={this.state.squares[i]}
                    onClick={() => this.handleClick(i)}
                />;
    }


  /**
   * renders the Board component which is a collection of Square components
   * @returns {any}
   */
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
        // if there is already a winner, do not let the user to proceed
        status = 'Winner: ' + winner;
    }
    else
    {
        // if there is no winner yet, let the next user choose
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    // render all the Squares and pass the state of each using 'props'
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
  /**
   * Render the Game - 2 TicTacToe baords
   * @returns {any}: 2 TicTacToe baord components
   */
  render() {
    return (
      <div className="game">
        <div className="game-info">
          <div> --- GAME-1 --- </div>
        </div>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div> --- GAME-2 --- </div>
        </div>
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


/**
 * Calculate the board winner
 * @param {any} squares: Array with state of all the Squares
 * @returns {any}:
 */
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
      // return value X or 0, to indicate who is the winner
      return squares[a];
    }
  }
  return null;  // no winner found
}

// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

// export this Component so that it can be imported and used in the main()
export default Game;
