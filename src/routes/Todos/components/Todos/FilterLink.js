import React from 'react';
import store from './store';
import classnames from 'classnames';
import { SET_VISIBILITY_FILTER } from './actions/index';

const FilterLink = ({ filter, currentFilter, children }) => {
  const clickHandler = (e) => {
    store.dispatch({
      type: SET_VISIBILITY_FILTER,
      filter
    });
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
  currentFilter: React.PropTypes.string
};

export default FilterLink;
