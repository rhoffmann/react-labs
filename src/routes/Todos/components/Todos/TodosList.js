import React from 'react';
import store from './store';
import classnames from 'classnames';
import { TOGGLE_TODO, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './actions/index';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
};

const TodosList = ({ todos, currentFilter }) => {
  const visibleTodos = getVisibleTodos(todos, currentFilter);

  const todosList = visibleTodos.map(t => {
    const classNames = classnames(
      'list-group-item',
      { disabled: t.completed }
    );

    return (
      <button type="button" className={ classNames } key={t.id}>
        <input type="checkbox"
          onChange={() => {
            store.dispatch({
              type: TOGGLE_TODO,
              id: t.id
            });
          }}
          checked={t.completed}
        />
        <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
          {t.text}
        </span>
      </button>
    );
  }
  );
  return (
    <div className="list-group">
      { todosList }
    </div>
  );
};

TodosList.propTypes = {
  todos: React.PropTypes.array,
  currentFilter: React.PropTypes.string
};

export default TodosList;
