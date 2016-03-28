import React from 'react';

const CountButton = React.createClass({
  propTypes: {
    val: React.PropTypes.number,
    update: React.PropTypes.func
  },
  defaultProps: {
    val: 0
  },
  getInitialState() {
    return {
      increasing: false
    };
  },
  componentWillReceiveProps(nextProps) {
    console.log('willReceiveProps', nextProps);
    this.setState({
      increasing: nextProps.val > this.props.val
    });
  },
  shouldComponentUpdate(nextProps, nextState) {
    const shouldIt = nextProps.val % 5 === 0;
    console.log('shouldComponentUpdate +++', shouldIt);
    // console.log('nextProps', nextProps);
    // console.log('nextState', nextState);
    // console.log('shouldComponentUpdate ---');
    return shouldIt;
  },
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate +++');
    console.log('prevProps', prevProps);
    // console.log('prevState', prevState);
    // console.log('componentDidUpdate ---');
  },
  render() {
    console.log('increasing:', this.state.increasing);
    return (
      <button onClick={this.props.update}>{this.props.val}</button>
    );
  }
});

export default CountButton;
