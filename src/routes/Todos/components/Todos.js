import React from 'react';
// import CounterDemo from './Counter/CounterDemo';
// import Provider from './lib/Provider';
import { Provider } from 'react-redux';
import TodosApp from './Todos/TodosApp';
import store from './Todos/store';

const Todos = () => {
  return (
    <div className="todos">
      <h2>Todos</h2>
      <Provider store={ store }>
        <TodosApp />
      </Provider>
    </div>
  );
};

export default Todos;
