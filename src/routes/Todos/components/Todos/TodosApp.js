import React from 'react';
import uuid from 'uuid';
import { ADD_TODO, TOGGLE_TODO, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './actions/index';
import store from './store';
import TodoList from './TodoList';
import FilterLink from './FilterLink';

store.dispatch({
  type: 'ADD_TODO',
  text: 'do something',
  id: uuid.v4()
});

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

const TodosApp = React.createClass({
  getInitialState() {
    return store.getState();
  },
  componentDidMount() {
    store.subscribe(this.update);
  },
  update() {
    this.setState(store.getState());
  },
  toggleTodo(id) {
    return store.dispatch({
      type: TOGGLE_TODO,
      id
    });
  },
  addTodo() {
    const text = this.input.value.trim();
    if (text === '') {
      return;
    }
    store.dispatch({
      type: ADD_TODO,
      id: uuid.v4(),
      text
    });
    this.input.value = '';
  },
  checkEnter(e) {
    if (e.keyCode === 13) {
      this.addTodo();
    }
  },
  render() {
    const filter = this.state.visibilityFilter;
    const visibleTodos = getVisibleTodos(this.state.todos, filter);
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <div className="input-group">
                <input ref={ node => { this.input = node; } }
                  className="form-control"
                  placeholder="todo"
                  type="text"
                  onKeyDown={(e) => { this.checkEnter(e);} }
                />
                <div className="input-group-btn">
                  <button className="btn btn-default" onClick={this.addTodo}>add</button>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="btn-group" role="group">
                <FilterLink filter={SHOW_ALL} currentFilter={filter}>all</FilterLink>
                <FilterLink filter={SHOW_ACTIVE} currentFilter={filter}>active</FilterLink>
                <FilterLink filter={SHOW_COMPLETED} currentFilter={filter}>completed</FilterLink>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <TodoList todos={visibleTodos} onTodoClick={(id) => { this.toggleTodo(id); } } />
          </div>
        </div>
      </div>
    );
  }
});

export default TodosApp;
