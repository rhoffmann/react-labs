import React from 'react';
import store from './store';
import { INCREMENT, DECREMENT } from './actions';
// https://github.com/webpack/webpack/issues/304
// import sinon from 'sinon';
import sinon from 'sinon/pkg/sinon';
import { expect } from 'chai';

describe('store', () => {

  it('it starts with an initial state', () => {
    expect(
      store.getState()
    ).to.equal(0);
  });

  it('increments', () => {
    store.dispatch({type: INCREMENT});
    expect(
      store.getState()
    ).to.equal(1);
  });

  it('decrements', () => {
    store.dispatch({type: DECREMENT});
    expect(
      store.getState()
    ).to.equal(0);
  });

  it('notifies its subscribers', () => {
    let spy = sinon.spy();
    store.subscribe(spy);
    store.dispatch({type: INCREMENT});
    sinon.assert.calledOnce(spy);
  });

});
