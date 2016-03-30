import React from 'react';
import store from './Counter/store';
import { INCREMENT, DECREMENT } from './Counter/actions';
import Counter from './Counter/Counter';


const CounterDemo = React.createClass({
  getInitialState() {
    return {
      number: store.getState()
    };
  },
  componentWillMount() {
    store.subscribe(this.update);
  },
  increment() {
    store.dispatch({ type: INCREMENT });
  },
  decrement() {
    store.dispatch({ type: DECREMENT });
  },
  update() {
    this.setState({
      number: store.getState()
    });
  },
  render() {
    return (
      <div>
        <Counter value={this.state.number}
          onIncrement={this.increment}
          onDecrement={this.decrement}
        />
      </div>
    );
  }
});

export default CounterDemo;
