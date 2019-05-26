import React from 'react';
import '../css/Cell.css';

class Cell extends React.Component {

  getValue(color, hasBall) {
    if (hasBall) {
      return(
        <svg className='ball' height="50" width="30">
        <circle cx="15" cy="15" r="9.55" stroke="black" stroke-width="3" fill={color} />
        </svg>
      )
    } else {
      return null;
    }
  }
  
  render() {
    return (
      <div className='cell' >
        {this.getValue(this.props.color, this.props.hasBall)}
      </div>
    );
  }
}

export default Cell;