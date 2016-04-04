import React from 'react';
import counter from './reducer';
// import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';

describe('reducer', () => {
  it('does nothing with unknown actions', () => {
    expect(
      counter(0, {})
    ).to.equal(0);
  });

  it('has initial state', () => {
    expect(
      counter(undefined, {})
    ).to.equal(0);
  });

  it('increments', () => {
    expect(
      counter(0, { type: 'INCREMENT' })
    ).to.equal(1);
    expect(
      counter(1, { type: 'INCREMENT' })
    ).to.equal(2);
  });

  it('decrements', () => {
    expect(
      counter(2, { type: 'DECREMENT' })
    ).to.equal(1);
    expect(
      counter(1, { type: 'DECREMENT' })
    ).to.equal(0);
  });
});
