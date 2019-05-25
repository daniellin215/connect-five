import React from 'react';
import Cell from './Cell';
import '../css/UpComingBall.css';

class UpComingBall extends React.Component {
  renderCell() {
    return <Cell />
  }

  render() {
    
    return (
      <div className="upcoming">
        {this.renderCell()}
        {this.renderCell()}
        {this.renderCell()}
      </div>
    )
  }
}

export default UpComingBall;