import React from 'react';

const Provider = React.createClass({
  propTypes: {
    children: React.PropTypes.object,
    store: React.PropTypes.object
  },
  getChildContext() {
    return {
      store: this.props.store
    };
  },
  render() {
    return this.props.children;
  }
});

Provider.childContextTypes = {
  store: React.PropTypes.object
};

// children must declare contextTypes = { store: React.PropTypes.object }
// functional components use second argument as context: const Child = (props, context) => ...

export default Provider;
