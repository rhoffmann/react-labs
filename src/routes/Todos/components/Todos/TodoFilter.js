import React from 'react';
import FilterLink from './FilterLink';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './actions/index';

const TodoFilter = ({ visibilityFilter, onFilterClick }) => {
  return (
    <div className="form-group">
      <div className="btn-group" role="group">
        <FilterLink filter={SHOW_ALL}
          onClick={onFilterClick}
          currentFilter={visibilityFilter}
        >
          all
        </FilterLink>
        <FilterLink filter={SHOW_ACTIVE}
          onClick={onFilterClick}
          currentFilter={visibilityFilter}
        >
          active
        </FilterLink>
        <FilterLink filter={SHOW_COMPLETED}
          onClick={onFilterClick}
          currentFilter={visibilityFilter}
        >
          completed
        </FilterLink>
      </div>
    </div>
  );
};

TodoFilter.propTypes = {
  visibilityFilter: React.PropTypes.string,
  onFilterClick: React.PropTypes.func.isRequired
};

export default TodoFilter;
