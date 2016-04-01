import React from 'react';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, TOGGLE_TODO } from '../actions';

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
  propTypes: {
    store: React.PropTypes.object.isRequired
  },
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  },
  componentWillUnmount() {
    this.unsubscribe();
  },
  toggleTodo(id) {
    const { store } = this.props;
    return store.dispatch({
      type: TOGGLE_TODO,
      id
    });
  },
  render() {
    // const props = this.props;
    const { store } = this.props;
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
