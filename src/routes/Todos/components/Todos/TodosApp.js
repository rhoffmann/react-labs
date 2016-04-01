import React from 'react';
import uuid from 'uuid';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from './actions/index';
import store, { getVisibleTodos } from './store';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoFilter from './TodoFilter';

store.dispatch({
  type: 'ADD_TODO',
  text: 'do something',
  id: uuid.v4()
});

const TodosApp = React.createClass({
  getInitialState() {
    return store.getState();
  },
  componentDidMount() {
    store.subscribe(this.update);
  },
  setFilter(filter) {
    store.dispatch({
      type: SET_VISIBILITY_FILTER,
      filter
    });
  },
  toggleTodo(id) {
    return store.dispatch({
      type: TOGGLE_TODO,
      id
    });
  },
  addTodo(value) {
    const text = value.trim();
    if (text === '') {
      return;
    }
    store.dispatch({
      type: ADD_TODO,
      id: uuid.v4(),
      text
    });
  },
  update() {
    this.setState(store.getState());
  },
  render() {
    const visibilityFilter = this.state.visibilityFilter;
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <AddTodo onAddTodo={ (value) => this.addTodo(value) } />
            <TodoFilter
              visibilityFilter={visibilityFilter}
              onFilterClick={ (filter) => this.setFilter(filter) }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <TodoList
              todos={ getVisibleTodos(this.state.todos, visibilityFilter) }
              onTodoClick={ (id) => { this.toggleTodo(id); } }
            />
          </div>
        </div>
      </div>
    );
  }
});

export default TodosApp;
