import React from 'react';
import store from '../store';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, TOGGLE_TODO } from '../actions/index';

import TodoList from '../components/TodoList';

export const getVisibleTodos = (todos, filter) => {
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

const VisibleTodoList = React.createClass({
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  },
  componentWillUnmount() {
    this.unsubscribe();
  },
  toggleTodo(id) {
    return store.dispatch({
      type: TOGGLE_TODO,
      id
    });
  },
  render() {
    // const props = this.props;
    const state = store.getState(); // BAD
    return (
      <TodoList
        todos={ getVisibleTodos(state.todos, state.visibilityFilter) }
        onTodoClick={ (id) => this.toggleTodo(id) }
      />
    );
  }
});

export default VisibleTodoList;
