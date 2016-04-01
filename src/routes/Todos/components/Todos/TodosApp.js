import React from 'react';

import VisibleTodoList from './containers/VisibleTodoList';
import TodoFilter from './containers/TodoFilter';
import AddTodo from './AddTodo';

const TodosApp = ({ store }) => (
  <div>
    <div className="row">
      <div className="col-md-6">
        <AddTodo store={ store } />
        <TodoFilter store={ store } />
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <VisibleTodoList store={ store } />
      </div>
    </div>
  </div>
);

TodosApp.propTypes = {
  store: React.PropTypes.object.isRequired
};

export default TodosApp;
