import React from 'react';
import Alert from 'global/Alert';

const Component = React.createClass({
  getInitialState() {
    return {
      txt: ''
    };
  },
  update(e) {
    this.setState({
      txt: e.target.value
    });
  },
  render() {
    return (
      <div>
        <Widget update={this.update} message={this.state.txt} />
        <Widget update={this.update} message={this.state.txt} />
        <Widget update={this.update} message={this.state.txt} />
      </div>
    );
  }
});

const Widget = (props) => {
  return (
    <div>
      <div className="input-group">
        <input type="text"
          placeholder="enter something"
          className="form-control"
          onChange={props.update}
        />
      </div>
      <Alert type="info" message={props.message} />
    </div>
  );
};

Widget.propTypes = {
  update: React.PropTypes.func,
  message: React.PropTypes.string
};

export default Component;
