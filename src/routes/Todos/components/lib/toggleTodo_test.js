import React from 'react';
import expect from 'expect';
import deepFreeze from 'deep-freeze-strict';

const toggleTodo = (todo) => {
  // return Object.assign({}, todo, {
  //   completed: !todo.completed
  // });
  return {
    ...todo,
    completed: !todo.completed
  };
}


describe('todo', () => {
  let completeTodo, incompleteTodo;

  beforeEach(() => {
    incompleteTodo = {
      id: 0,
      text: 'Learn Redux',
      completed: false
    };
    completeTodo = {
      id: 0,
      text: 'Learn Redux',
      completed: true
    };
  })

  it('toggles', () => {
    deepFreeze(completeTodo);
    deepFreeze(incompleteTodo);
    expect(toggleTodo(completeTodo).completed).toEqual(false);
    expect(toggleTodo(incompleteTodo).completed).toEqual(true);
  });

});
