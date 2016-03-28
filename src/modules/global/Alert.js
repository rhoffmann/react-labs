import React from 'react';
import classnames from 'classnames';

const Alert = ({ type, message }) => {
  const classes = classnames('alert', `alert-${type}`);
  return (
    <div className={classes}>{message}</div>
  );
};

Alert.propTypes = {
  type: React.PropTypes.string,
  message: React.PropTypes.string
};

export default Alert;
