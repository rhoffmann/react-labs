import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ReactCSSTransitionGroup
      component="div"
      className="list-group"
      transitionName="example"
      transitionAppear
      transitionAppearTimeout={1000}
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      { todos.map(todo =>
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id) } />
      )}
    </ReactCSSTransitionGroup>
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
