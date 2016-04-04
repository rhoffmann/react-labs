import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import Todo from './Todo';
import sinon from 'sinon/pkg/sinon';

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
  const todoProps = {
    id: 'abcd',
    text: 'some task',
    completed: false,
    onClick: sinon.spy()
  };

  let output;

  beforeEach(() => {
    renderer.render(<Todo {...todoProps} />);
    output = renderer.getRenderOutput();
  })

  it('should be a button (why? :)', () => {
    expect(output.type).toEqual('button');
    console.log(output);
  });
});