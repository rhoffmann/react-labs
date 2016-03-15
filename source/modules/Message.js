import React from 'react'
import classnames from 'classnames'

export default React.createClass({

  render() {
    const classes = classnames('message', `message--${this.props.type}`);
    return (
      <div className={classes}>
        {this.props.message}
      </div>
    )
  }
})
