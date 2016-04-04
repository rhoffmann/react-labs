import React from 'react';
import deepFreeze from 'deep-freeze-strict';
import expect from 'expect';

import todos from './todos_reducer';
import { ADD_TODO, TOGGLE_TODO } from '../actions';

const stateAddBefore = [];

const addAction = {
  type: ADD_TODO,
  id: 0,
  text: 'Learn Redux'
};

const stateAddAfter = [{
  id: 0,
  text: 'Learn Redux',
  completed: false
}];

const stateToggleBefore = [{
  id: 0,
  text: 'Learn Redux',
  completed: false
},{
  id: 1,
  text: 'Learn React',
  completed: false
}]

const toggleAction = {
  type: TOGGLE_TODO,
  id: 1
};

const stateToggleAfter = [{
  id: 0,
  text: 'Learn Redux',
  completed: false
},{
  id: 1,
  text: 'Learn React',
  completed: true
}];

deepFreeze(stateAddBefore);
deepFreeze(stateToggleBefore)
deepFreeze(addAction);
deepFreeze(toggleAction);

describe('todoApp reducer', () => {
  it('adds a todo', () => {
    expect(todos(stateAddBefore, addAction)).toEqual(stateAddAfter);
  });
  it('toggles a todo', () => {
    expect(todos(stateToggleBefore, toggleAction)).toEqual(stateToggleAfter);
  });
});
