import React from 'react';
import ReactDOM from 'react-dom';
import NumInput from './comp/NumInput';
import UserListContainer from './comp/UserListContainer';

const Component = React.createClass({
  getInitialState() {
    return {
      limit: -1,
      green: 0
    };
  },
  update(e) {
    this.setState({
      limit: ReactDOM.findDOMNode(this.refs.limit.refs.input).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.input).value
    });
  },
  render() {
    return (
      <div className="col-xs-6">
        <NumInput ref="limit"
          min={-1}
          max={10}
          step={1}
          label="limit"
          type="range"
          update={this.update}
          value={+this.state.limit}
        />
        <NumInput ref="green"
          min={0}
          max={255}
          step={0.1}
          label="green"
          type="number"
          update={this.update}
          value={+this.state.green}
        />
        <UserListContainer limit={this.state.limit} />
      </div>
    );
  }
});


export default Component;
