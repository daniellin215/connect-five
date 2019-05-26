import React from 'react';

class Cell extends React.Component {

  getValue(color, hasBall) {
    if (hasBall) {
      return(
        <svg height="30" width="30">
        <circle  r="15" stroke="black" stroke-width="3" fill={color} />
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