import React from 'react';
import deepFreeze from 'deep-freeze-strict';
import expect from 'expect';

import todos from './reducer';
import { ADD_TODO } from './actions';

const stateBefore = [];
const action = {
  type: ADD_TODO,
  id: 0,
  text: 'Learn Redux'
};
const stateAfter = [{
  id: 0,
  text: 'Learn Redux',
  completed: false
}];

deepFreeze(stateBefore)
deepFreeze(action);

describe('todos reducer', () => {
  it('adds a todo', () => {
    expect(todos(stateBefore, action)).toEqual(stateAfter);
  });
});
