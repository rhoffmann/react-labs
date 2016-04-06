import React from 'react';
import expect from 'expect';

import filterReducer from './filterReducer';
import {
  SET_VISIBILITY_FILTER,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../actions';


describe('filterReducer', () => {
  it('sets the filter', () => {
    function stateBefore() {
      return SHOW_COMPLETED;
    }

    const action = {
      type: SET_VISIBILITY_FILTER,
      filter: SHOW_ACTIVE
    };

    const actual = filterReducer(stateBefore(), action);
    const expected = SHOW_ACTIVE;
    expect(actual).toEqual(expected);
  });
});
