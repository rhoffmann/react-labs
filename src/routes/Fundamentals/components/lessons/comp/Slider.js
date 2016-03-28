import React from 'react';

const Slider = React.createClass({
  propTypes: {
    update: React.PropTypes.func,
    value: React.PropTypes.number,
    label: React.PropTypes.string
  },
  defaultProps: {
    value: 0,
    label: ''
  },
  render() {
    return (
      <div className="input-group">
        <span className="input-group-addon">{this.props.label}</span>
        <input ref="input" type="range"
          min="0"
          max="255"
          className="form-control"
          value={this.props.value}
          onChange={this.props.update}
        />
        <span className="input-group-addon">{this.props.value}</span>
      </div>
    );
  }
});

export default Slider;
