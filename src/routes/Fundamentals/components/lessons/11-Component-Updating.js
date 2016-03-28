import React from 'react';
import CountButton from './comp/CountButton';

const Component = React.createClass({
  getInitialState() {
    return {
      val: 0
    };
  },
  update() {
    this.setState({
      val: this.state.val + 1
    });
  },
  render() {
    return (
      <CountButton update={this.update} val={this.state.val} />
    );
  }
});

export default Component;
