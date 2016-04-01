import React from 'react';
import classnames from 'classnames';

const Link = ({ active, children, onClick }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <button className={ classnames('btn', 'btn-default', { active }) }
      type="button"
      onClick={ clickHandler }
    >
      {children}
    </button>
  );
};

Link.propTypes = {
  active: React.PropTypes.bool,
  children: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired
};

export default Link;
