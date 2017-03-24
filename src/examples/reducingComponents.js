import React from 'react';

import { compose, map, prop, curry, reduce, pipe } from 'ramda';

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
  ],
  year: '2016'
};

const Header = title => <h1>Todo List: {title}</h1>;
const Footer = year => <footer>(c) {year}</footer>;
const List = items => <ul>{items}</ul>;
const Item = todo => <li key={todo.id}>{todo.text}</li>;

const getTodos = prop('todos');

const combine = curry((c, o) => x => (<div>{c(x)} {o(x)}</div>));

const combineComponents = (...args) => {
  const [first, ...rest] = args;
  return reduce(
    (acc, c) => combine(acc, c),
    first,
    rest
  );
};


const TodoHeader = pipe(s => s.title, Header);
const TodoList = pipe(getTodos, compose(List, map(Item)));
const TodoFooter = pipe(s => s.year, Footer);

const App = combineComponents(TodoHeader, TodoList, TodoFooter);

// <App {...state} />
