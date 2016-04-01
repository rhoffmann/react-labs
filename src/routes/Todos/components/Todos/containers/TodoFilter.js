import React from 'react';
import FilterLink from './FilterLink';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions';

const TodoFilter = ({ store }) => {
  return (
    <div className="form-group">
      <div className="btn-group" role="group">
        <FilterLink store={ store } filter={SHOW_ALL}>all</FilterLink>
        <FilterLink store={ store } filter={SHOW_ACTIVE}>active</FilterLink>
        <FilterLink store={ store } filter={SHOW_COMPLETED}>completed</FilterLink>
      </div>
    </div>
  );
};

TodoFilter.propTypes = {
  store: React.PropTypes.object.isRequired
};

export default TodoFilter;
