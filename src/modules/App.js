import React from 'react';
import { Link, IndexLink } from 'react-router';
import NavLink from './NavLink';

const App = (props) =>
  <div>
    <h1><NavLink to="/" onlyActiveOnIndex>Gettohub Issues</NavLink></h1>
    <ul className="nav" role="nav">
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/repos">Repos</NavLink></li>
    </ul>

    <div className="page-content">
      { props.children }
    </div>
  </div>;

App.propTypes = {
  children: React.PropTypes.object
};

export default App;
