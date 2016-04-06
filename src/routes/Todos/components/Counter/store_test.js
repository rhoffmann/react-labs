import React from 'react';
import store from './store';
import { INCREMENT, DECREMENT } from './actions';

import expect, { createSpy, spyOn, isSpy } from 'expect';

describe('store', () => {
  it('it starts with an initial state', () => {
    expect(
      store.getState()
    ).toEqual(0);
  });

  it('increments', () => {
    store.dispatch({ type: INCREMENT });
    expect(
      store.getState()
    ).toEqual(1);
  });

  it('decrements', () => {
    store.dispatch({ type: DECREMENT });
    expect(
      store.getState()
    ).toEqual(0);
  });

  it('notifies its subscribers', () => {
    const handlers = {
      storeSubscriber: () => { }
    };

    // let spy = createSpy();
    const spy = spyOn(handlers, 'storeSubscriber').andCallThrough();

    // store.subscribe(spy);
    store.subscribe(handlers.storeSubscriber);
    store.dispatch({ type: INCREMENT });

    expect(spy).toHaveBeenCalled();
  });
});
