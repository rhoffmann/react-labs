import React from 'react';
import store from './lib/store';
import { INCREMENT, DECREMENT } from './lib/actions';
import Counter from './lib/Counter';


const Todos = React.createClass({
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
        <h2>Todos</h2>
        <Counter value={this.state.number}
          onIncrement={this.increment}
          onDecrement={this.decrement}
        />
      </div>
    );
  }
});

export default Todos;
