import React from 'react';
import Alert from 'global/Alert';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[ 0 ].value;
    const path = `/repos/${userName}`;
    this.context.router.push(path); // var 2, recognize context
    return true;
  },
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-6">
            <div className="well">
              <h4>Look up repos by username</h4>
              <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="github username" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">Go</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="repo-section">
          { this.props.children || <Alert type="info" message="look for a user name" /> }
        </div>
      </div>
    );
  }
});
