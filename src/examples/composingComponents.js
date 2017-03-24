import React from 'react';

import { compose, map, prop, curry } from 'ramda';

const Header = title => <h1>Todo List: {title}</h1>;
const List = items => <ul>{items}</ul>;
const Item = todo => <li key={todo.id}>{todo.text}</li>;
const getTodos = prop('todos');
const TodoListComp = compose(List, map(Item), getTodos);

const props = {
  todos: [
    {
      id: 1,
      text: 'foo'
    },
    {
      id: 2,
      text: 'bar'
    }
  ]
};

// <TodoListComp {...props} />



// combining multiple components

const state = {
  title: 'my list',
  todos: [
    {
      id: 1,
      text: 'foo'
    },
    {
      id: 2,
      text: 'bar'
    }
  ]
};

const mapStateToProps = curry((f, g) => compose(g, f));
const combine = curry((c, o) => x => (<div>{c(x)} {o(x)}</div>));

const TodoHeader = mapStateToProps(s => s.title, Header);
const TodoList = mapStateToProps(getTodos, compose(List, map(Item)));

const App = combine(TodoHeader, TodoList);

// <App {...state} />
