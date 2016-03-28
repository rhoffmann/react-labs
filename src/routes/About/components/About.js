import React from 'react';

export default React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentWillMount() {
    this.context.router.setRouteLeaveHook(
      this.props.route,
      this.routerWillLeave
    );
  },
  routerWillLeave(nextLocation) {
    return `leaving about for ${nextLocation.pathname}`;
  },
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
});
