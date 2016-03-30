import React from 'react';
import counter from './reducer';

// import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';

describe('reducer', () => {
  it('does nothing with unknown actions', () => {
    expect(
      counter(0, {})
    ).toEqual(0);
  });

  it('has initial state', () => {
    expect(
      counter(undefined, {})
    ).toEqual(0);
  });

  it('increments', () => {
    expect(
      counter(0, { type: 'INCREMENT' })
    ).toEqual(1);
    expect(
      counter(1, { type: 'INCREMENT' })
    ).toEqual(2);
  });

  it('decrements', () => {
    expect(
      counter(2, { type: 'DECREMENT' })
    ).toEqual(1);
    expect(
      counter(1, { type: 'DECREMENT' })
    ).toEqual(0);
  });
});
