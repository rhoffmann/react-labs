import React from 'react';
import classnames from 'classnames';

const Message = (props) => {
  const classes = classnames('message', `message--${props.type}`);
  return (
    <div className={classes}>
      {props.message}
    </div>
  );
};

Message.propTypes = {
  type: React.PropTypes.string,
  message: React.PropTypes.string
};

export default Message;
