import React from 'react';
// import CounterDemo from './Counter/CounterDemo';
import TodosApp from './Todos/TodosApp';
import store from './Todos/store';

const Todos = () => {
  return (
    <div className="todos">
      <h2>Todos</h2>
      <TodosApp store={store} />
    </div>
  );
};

export default Todos;
