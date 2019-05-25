import React from 'react';
import Cell from './Cell';
import '../App.css';

class Board extends React.Component {
  state = {
    gameStatus: true,
    board: [],
    
  };

  renderCell() {
    return <Cell />
  }

  render() {

    for (let r = 0; r < this.props.height; r++) {
      const rows = [];
      for (let c = 0; c < this.props.width; c++) {
        rows.push(this.renderCell())
      }
      this.state.board.push(<div>{rows}</div>)
    }   
    return (
      <div className='board'>
        {this.state.board}
      </div>
    );
  }
}

export default Board;