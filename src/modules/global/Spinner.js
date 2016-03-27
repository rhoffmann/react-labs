import React from 'react';

const Spinner = ({ text = '' }) => {
  return (
    <div className="spinner-container">
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
      <div className="spinner-text">{text}</div>
    </div>
  );
};

Spinner.propTypes = {
  text: React.PropTypes.string
};

export default Spinner;
