import React from 'react';
import ReactDOM from 'react-dom';

const Component = React.createClass({
  getInitialState: () => {
    return {
      val: 0
    };
  },
  componentWillMount() {
    // called before render, but after state is available
    console.log('willMount +++');
    this.setState({
      m: 2
    });
    console.log('willMount ---');
  },
  componentDidMount() {
    // called after first render, DOM is available
    console.log('didMount +++');
    this.inc = setInterval(this.update, 500);
    console.log(ReactDOM.findDOMNode(this));
    console.log('didMount ---');
  },
  componentWillUnmount() {
    // called before unmounting, clear up stuff
    console.log('willUnmount +++');
    clearInterval(this.inc);
    console.log('willUnmount ---');
  },
  update() {
    this.setState({
      val: this.state.val + 1
    });
  },
  render() {
    console.log('rendering +++');
    return (
      <div>
        <button className="btn btn-default" onClick={this.update}>
          {this.state.val * this.state.m }
        </button>
      </div>
    );
  }
});

export default Component;
