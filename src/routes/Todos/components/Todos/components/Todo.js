import classnames from 'classnames';
import React from 'react';

const Todo = ({ id, completed, text, onClick }) => {
  const classNames = classnames(
    'list-group-item',
    { disabled: completed }
  );

  return (
    <button type="button" onClick={onClick} ref="todo" className={ classNames } key={id}>
      <input type="checkbox" readOnly checked={completed} />
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {text}
        </span>
    </button>
  );
};

Todo.propTypes = {
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Todo;
