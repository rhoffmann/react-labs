import React from 'react';
import expect from 'expect';

import store from './store';

import {
  addTodo,
  addTodoById,
  toggleTodo,
  removeTodo,
  setVisibilityFilter
} from './actionCreator';

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
  SET_VISIBILITY_FILTER
} from './actions';

describe('appStore', () => {
  it('should initialize', () => {
    const actual = store.getState();
    const expected = {
      todos: [],
      visibilityFilter: SHOW_ALL
    };
    expect(actual).toEqual(expected);
  });

  xdescribe('todos', () => {
    it('should work with a serie of actions', () => {
      const actions = [
        addTodoById(1, 'some text'),
        addTodoById(2, 'some more text'),
        addTodoById(3, 'some even more text'),
        removeTodo(2),
        toggleTodo(3),
        addTodoById(4, 'woot')
      ];

      actions.forEach((action) => store.dispatch(action));

      const actual = store.getState();
      const expected = {
        todos: [
          {
            id: 1,
            text: 'some text',
            completed: false
          },
          {
            id: 3,
            text: 'some even more text',
            completed: true
          },
          {
            id: 4,
            text: 'woot',
            completed: false
          }
        ],
        visibilityFilter: SHOW_ALL
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('visibilityFilter', () => {
    it('should show all initially', () => {
      const actual = store.getState();
      expect(actual.visibilityFilter).toEqual(SHOW_ALL);
    });
    xit('should toggle to completed', () => {
      store.dispatch({
        type: SET_VISIBILITY_FILTER,
        filter: SHOW_COMPLETED
      });
      const actual = store.getState();
      expect(actual.visibilityFilter).toEqual(SHOW_COMPLETED);
    });
    xit('should toggle to active', () => {
      store.dispatch(
        setVisibilityFilter(SHOW_ACTIVE)
      );
      const actual = store.getState();
      expect(actual.visibilityFilter).toEqual(SHOW_ACTIVE);
    });
  });
});
