import React from 'react';

import VisibleTodoList from './containers/VisibleTodoList';
import TodoFilter from './containers/TodoFilter';
import AddTodo from './AddTodo';

const TodosApp = () => (
  <div>
    <div className="row">
      <div className="col-md-6">
        <AddTodo />
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

export default TodosApp;
