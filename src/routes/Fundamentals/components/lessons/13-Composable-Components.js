import React from 'react';
import ReactDOM from 'react-dom';
import NumInput from './comp/NumInput';

const Component = React.createClass({
  getInitialState() {
    return {
      red: 0
    };
  },
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.input).value
    });
  },
  render() {
    return (
      <div className="col-xs-6">
        <NumInput ref="red"
          min={0}
          max={255}
          step={0.1}
          label="green"
          type="range"
          update={this.update}
          value={+this.state.red}
        />
      </div>
    );
  }
});


export default Component;
