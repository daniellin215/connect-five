import React from 'react';
import Cell from './Cell';
import '../App.css';

class Board extends React.Component {
  state = {
    gameStatus: true,
    board: [],
    ballCount: 0,
    
  };

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  renderCell(color, hasBall) {
    return <Cell color={color} hasBall={hasBall}/>
  }

  setBallColor() {
    let rng = this.getRndInteger(0, 5)
    let color;
      if (rng === 0) {
        color = 'black';
      }
      if (rng === 1) {
        color = 'red';
      }
      if (rng === 2) {
        color = 'fuchsia';
      }
      if (rng === 3) {
        color = 'lime';
      }
      if (rng === 4) {
        color = 'yellow';
      }
      if (rng === 5) {
        color = 'blue';
      }
      return color;
    }

    plantBall(board) {
      let count = 0;
      let randomx = 0;
      let randomy = 0;
      console.log(board)
      while (count < 5) {
        randomx = this.getRndInteger(1, 9);
        randomy = this.getRndInteger(1, 9);

        
        board[randomx].props.children[randomy] = this.renderCell(this.setBallColor(), true)
        
        count++;
      }
    }

  render() {

    for (let r = 0; r < this.props.height; r++) {
      let rows = [];
      for (let c = 0; c < this.props.width; c++) {
        rows.push(this.renderCell(null, false));
      }
      this.state.board.push(<div>{rows}</div>)
    }   
    return (
      <div className='board'>
        {this.state.board}
        {/* {console.log(this.state.board)} */}
        {this.plantBall(this.state.board)}
      </div>
    );
  }
}

export default Board;