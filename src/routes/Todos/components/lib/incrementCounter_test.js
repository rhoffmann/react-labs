import React from 'react';
import { expect } from 'chai';
import deepFreeze from 'deep-freeze-strict';

const addCounter = (list) => {
  // return list.concat([0]);
  return [...list, 0];
};

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};

const incrementCounter = (list, index) => {
  // return list[index]++;
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};

describe('counter', () => {

  it('adds a counter', () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore);

    expect(addCounter(listBefore)).to.eql(listAfter);
  });

  it('removes counters', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];

    deepFreeze(listBefore);

    expect(removeCounter(listBefore, 1)).to.eql(listAfter);
  });


  it('increments a counter', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    deepFreeze(listBefore);

    expect(incrementCounter(listBefore, 1)).to.eql(listAfter);
  });
});
