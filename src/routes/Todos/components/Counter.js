import React from 'react';

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h3>{value}</h3>
    <button onClick={onIncrement} className="btn btn-default">+</button>
    <button onClick={onDecrement} className="btn btn-default">-</button>
  </div>
);

Counter.propTypes = {
  value: React.PropTypes.number,
  onIncrement: React.PropTypes.func,
  onDecrement: React.PropTypes.func
};

export default Counter;
