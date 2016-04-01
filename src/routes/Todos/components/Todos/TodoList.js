import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <div className="list-group">
      { todos.map(todo =>
        <Todo key={todo.id} todo={todo} onClick={() => onTodoClick(todo.id) } />
      )}
    </div>
  );
};

TodoList.propTypes = {
  todos: React.PropTypes.array,
  onTodoClick: React.PropTypes.func
};

export default TodoList;
