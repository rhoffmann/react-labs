import React from 'react';
import classnames from 'classnames';

const FilterLink = ({
  filter,
  currentFilter,
  children,
  onClick
}) => {
  const clickHandler = (e) => {
    e.preventDefault();
    onClick(filter);
  };

  const btnClass = classnames('btn', 'btn-default', {
    active: filter === currentFilter
  });

  return (
    <button className={btnClass} type="button" onClick={ clickHandler }>{children}</button>
  );
};

FilterLink.propTypes = {
  filter: React.PropTypes.string,
  children: React.PropTypes.string,
  currentFilter: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired
};

export default FilterLink;
