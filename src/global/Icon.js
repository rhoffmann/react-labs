import React from 'react';
import classnames from 'classnames';

const Icon = ({ type }) => {
  const classes = classnames('glyphicon', `glyphicon-${type}`);
  return (
    <span className={classes}></span>
  );
};

Icon.propTypes = {
  type: React.PropTypes.string
};

export default Icon;
