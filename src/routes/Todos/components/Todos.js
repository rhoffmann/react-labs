import React from 'react';
import store from './store';
import { INCREMENT, DECREMENT } from './actions';

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
        <h3>{this.state.number}</h3>
        <button onClick={this.increment} className="btn btn-default">+</button>
        <button onClick={this.decrement} className="btn btn-default">-</button>
      </div>
    );
  }
});

export default Todos;
