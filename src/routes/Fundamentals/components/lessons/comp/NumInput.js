import React from 'react';

const NumInput = React.createClass({
  propTypes: {
    update: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    type: React.PropTypes.oneOf(['number', 'range'])
  },
  defaultProps: {
    min: 0,
    max: 0,
    step: 1,
    type: 'range',
    value: 0,
    label: ''
  },
  render() {
    let labelHtml = this.props.label
      ? <span className="input-group-addon">{this.props.label}</span>
      : '';
    return (
      <div className="input-group">
        {labelHtml}
        <input ref="input" type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          className="form-control"
          value={this.props.value}
          defaultValue={this.props.value}
          onChange={this.props.update}
        />
        <span className="input-group-addon">{this.props.value}</span>
      </div>
    );
  }
});

export default NumInput;
