import React from 'react';
import uuid from 'uuid';
import { ADD_TODO } from './actions/index';
import store from './store';

import VisibleTodoList from './containers/VisibleTodoList';
import TodoFilter from './containers/TodoFilter';
import AddTodo from './AddTodo';

store.dispatch({
  type: 'ADD_TODO',
  text: 'do something',
  id: uuid.v4()
});

const TodosApp = React.createClass({
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
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <AddTodo onAddTodo={ (value) => this.addTodo(value) } />
            <TodoFilter />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <VisibleTodoList />
          </div>
        </div>
      </div>
    );
  }
});

export default TodosApp;
