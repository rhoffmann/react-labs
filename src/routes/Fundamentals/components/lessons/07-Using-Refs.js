import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './comp/Slider';
import rgbHex from 'rgb-hex';

const Component = React.createClass({
  getInitialState() {
    return {
      red: 0,
      green: 0,
      blue: 0
    };
  },
  update(e) {
    this.setState({
      red: parseInt(ReactDOM.findDOMNode(this.refs.red.refs.input).value, 10),
      green: parseInt(ReactDOM.findDOMNode(this.refs.green.refs.input).value, 10),
      blue: parseInt(ReactDOM.findDOMNode(this.refs.blue.refs.input).value, 10)
    });
  },
  render() {
    const { red, green, blue } = this.state;
    const bgColor = `rgb(${red},${green},${blue})`;
    const hex = `#${rgbHex(red, green, blue)}`;
    return (
      <div className="row">
        <div className="col-xs-6">
          <Slider ref="red" label="r" update={this.update} value={this.state.red} />
          <Slider ref="green" label="g" update={this.update} value={this.state.green} />
          <Slider ref="blue" label="b" update={this.update} value={this.state.blue} />
        </div>
        <div className="col-xs-6">
          <div style={{ width: '100px', height: '100px', background: bgColor }}></div>
          <div className="input-group">
            <input type="text" readOnly value={hex} />
          </div>
        </div>
      </div>
    );
  }
});


export default Component;
