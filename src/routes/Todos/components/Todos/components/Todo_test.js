import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import Todo from './Todo';
import sinon from 'sinon/pkg/sinon';

expect.extend(expectJSX);

const CoolComponent = ({ greeting }) => (
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
  let spy;
  let incompleteTodo;
  let completeTodo;

  beforeEach(() => {
    spy = sinon.spy();
    incompleteTodo = {
      id: 'abcd',
      text: 'some task',
      completed: false,
      onClick: spy
    };
    completeTodo = {
      id: 'abcd',
      text: 'some task',
      completed: true,
      onClick: spy
    };
  });

  describe('disabled', () => {
    const renderTodo = (props) => {
      renderer.render(<Todo {...props} />);
      const output = renderer.getRenderOutput();
      return output.props.className.includes('disabled');
    };
    it('should have no disabled class if not completed', () => {
      expect(renderTodo(incompleteTodo)).toEqual(false);
    });
    it('should have a disabled class if completed', () => {
      expect(renderTodo(completeTodo)).toEqual(true);
    });
  });

  xit('onClick event should fire if clicked on', () => {
    renderer.render(<Todo {...completeTodo} />);
    const output = renderer.getRenderOutput();
    // http://stackoverflow.com/questions/32407585/react-testing-event-handlers-in-react-shallow-rendering-unit-tests
    // console.log(output.props.children[0]);
    TestUtils.Simulate.click(output);
    sinon.assert.calledOnce(spy);
  });

  it('should be a button (why? :)', () => {
    renderer.render(<Todo {...incompleteTodo} />);
    const output = renderer.getRenderOutput();
    expect(output.type).toEqual('button');
  });
});
