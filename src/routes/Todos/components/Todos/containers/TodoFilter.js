import React from 'react';
import FilterLink from './FilterLink';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions';

const TodoFilter = () => {
  return (
    <div className="form-group">
      <div className="btn-group" role="group">
        <FilterLink filter={SHOW_ALL}>all</FilterLink>
        <FilterLink filter={SHOW_ACTIVE}>active</FilterLink>
        <FilterLink filter={SHOW_COMPLETED}>completed</FilterLink>
      </div>
    </div>
  );
};

export default TodoFilter;
