import React from 'react';
import Board from './Board';
import UpcomingBall from './UpComingBall';
import '../App.css';

class Game extends React.Component {
  state = {
    boardHeight: 9,
    boardWidth: 9,
  };


  render() {
    const { boardHeight, boardWidth } = this.state;
    return (
      <div>
        <h1>
          greetings
        </h1>
        <Board height={boardHeight} width={boardWidth} />

        <div>
          <h1>
            Upcoming Colors:
          </h1>
          <UpcomingBall />
        </div>
      </div>
    );
  }
}

export default Game;