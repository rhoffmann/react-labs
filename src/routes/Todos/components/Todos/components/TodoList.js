import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <div className="list-group">
      { todos.map(todo =>
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id) } />
      )}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func
};

export default TodoList;
