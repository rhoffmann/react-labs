import React from 'react';
import ReactDOM from 'react-dom';
// import { transform } from 'babel-core';
// import transformRuntime from 'babel-plugin-transform-runtime';
const babel = require('babel-standalone');

const defaultJSX = `
  const App = (props) => {
    return (
      <div className="peng">
        <a href="#"
          notrendered="x"
          onClick={update}></a>
      {/* this is a comment */}
      </div>
    );
  };
`;

const Component = React.createClass({
  getInitialState() {
    return {
      input: defaultJSX,
      // input: '',
      output: '',
      error: ''
    };
  },
  componentDidMount() {
    this.update();
  },
  update(e) {
    const code = ReactDOM.findDOMNode(this.refs.jsx).value;
    try {
      this.setState({
        error: '',
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
    const errorMsg = this.state.error
      ? <div className="alert alert-warning">{this.state.error}</div>
      : '';

    return (
      <div className="jsx-transpiler">
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <textarea ref="jsx" name="jsx"
                onChange={this.update}
                defaultValue={this.state.input}
                id="jsx"
                cols="50"
                rows="10"
              >
              </textarea>
              <footer>
                {errorMsg}
              </footer>
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
