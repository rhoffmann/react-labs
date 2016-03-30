import React from 'react';
import ReactDOM from 'react-dom';
// import { transform } from 'babel-core';
// import transformRuntime from 'babel-plugin-transform-runtime';
const babel = require('babel-standalone');

const Component = React.createClass({
  getInitialState() {
    return {
      input: '/* add your jsx here */',
      output: '',
      error: ''
    };
  },
  update(e) {
    const code = ReactDOM.findDOMNode(this.refs.jsx).value;
    try {
      this.setState({
        output: babel.transform(code, {
          presets: ['es2015', 'react']
        }).code
      });
    } catch (err) {
      this.setState({
        error: err.message
      });
    }
  },
  render() {
    return (
      <div>
        <header>{this.state.error}</header>
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <textarea ref="jsx" name="jsx"
                onChange={this.update}
                defaultValue={this.state.input}
                id="jsx"
                cols="60"
                rows="10"
              >
              </textarea>
            </div>
            <div className="col-xs-6">
              <pre>{this.state.output || 'no output'}</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


export default Component;
