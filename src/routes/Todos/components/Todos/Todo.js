import classnames from 'classnames';
import React from 'react';

const Todo = ({ todo, onClick }) => {
  const classNames = classnames(
    'list-group-item',
    { disabled: todo.completed }
  );

  return (
    <button type="button" onClick={onClick} className={ classNames } key={todo.id}>
      <input type="checkbox" readOnly checked={todo.completed} />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
    </button>
  );
};

Todo.propTypes = {
  todo: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Todo;
