import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import Todo from './Todo';

expect.extend(expectJSX);

const CoolComponent = ({greeting}) => (
  <div>
    <h1>Greeting</h1>
    <div>{greeting}</div>
  </div>
);

const renderer = TestUtils.createRenderer();

describe('CoolComponent', () => {
  it('should render the greeting', () => {
    renderer.render(<CoolComponent greeting="hello world" />);
    const actual = renderer.getRenderOutput();
    const expected = <div>hello world</div>;
    expect(actual).toIncludeJSX(expected);
  });
});

describe('Todo', () => {
  xit('should render correctly', () => {
    renderer.render(<Todo />);
    // const renderer = TestUtils.createRenderer();
  });
});