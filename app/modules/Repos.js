import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;

    if (repo === '' || userName === '') {
      return false;
    }

    const path = `/repos/${userName}/${repo}`;

    //browserHistory.push(path); // var 1, simple browser history push
    this.context.router.push(path); // var 2, recognize context
  },

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul className="nav">
          <li><NavLink to="/repos/rackt/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          <li><NavLink to="/repos/rhoffmann/triactify">Triactify</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>

        <div className="repo-section">
          { this.props.children }
        </div>
      </div>
    )
  }
})