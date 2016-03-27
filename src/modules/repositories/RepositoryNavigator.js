import React from 'react';
import NavLink from '../global/NavLink';

export default React.createClass({

  propTypes: {
    children: React.PropTypes.object
    // list: React.PropTypes.object,
    // detail: React.PropTypes.object
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
        <h2>Navigate Repositories</h2>
        <ul className="repos-list">
          <li><NavLink to="/repos/rackt">Rackt</NavLink></li>
          <li><NavLink to="/repos/facebook">Facebook</NavLink></li>
          <li><NavLink to="/repos/rhoffmann">rhoffmann</NavLink></li>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="userName" /> / {' '}
          <button type="submit">Go</button>
        </form>
        <div className="repo-section">
          { this.props.children }
        </div>
      </div>
    );
  }
});
