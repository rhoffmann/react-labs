import React from 'react';
import ReactDOM from 'react-dom';
import CountButton from './comp/LifecycleComponent';

const Wrapper = React.createClass({
  getMountNode() {
    return ReactDOM.findDOMNode(this.refs.comp);
    // const mountNode = document.getElementById('component');
  },
  mount() {
    ReactDOM.render(<CountButton />, this.getMountNode());
  },
  unmount() {
    ReactDOM.unmountComponentAtNode(this.getMountNode());
  },
  render() {
    return (
      <div>
        <button onClick={this.mount}>mount</button>
        <button onClick={this.unmount}>unmount</button>
        <div id="component" ref="comp"></div>
      </div>
    );
  }
});

export default Wrapper;
