import React from 'react';
import CounterDemo from './Counter/CounterDemo';
import TodosApp from './Todos/TodosApp';

const Todos = (props) => {
  return (
    <div>
      <h2>Todos</h2>
      <TodosApp />
      <CounterDemo />
    </div>
  );
};

export default Todos;
