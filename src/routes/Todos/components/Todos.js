import React from 'react';
// import CounterDemo from './Counter/CounterDemo';
import TodosApp from './Todos/TodosApp';

const Todos = (props) => {
  return (
    <div className="todos">
      <h2>Todos</h2>
      <TodosApp />
    </div>
  );
};

export default Todos;
