import React from 'react';
import classnames from 'classnames';

const Message = ({ type, message }) => {
  const classes = classnames('alert', `alert-${type}`);
  return (
    <div className={classes}>{message}</div>
  );
};

Message.propTypes = {
  type: React.PropTypes.string,
  message: React.PropTypes.string
};

export default Message;
