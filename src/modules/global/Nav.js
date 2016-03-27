import NavLink from './NavLink';
import React from 'react';

const homeLinkParams = {
  pathname: '/',
  query: { foo: 'bar' }
};

const Nav = () =>
  <nav className="navbar navbar-default">
    <div className="navbar-header">
      <NavLink className="navbar-brand" to={homeLinkParams} onlyActiveOnIndex>Gettohub Issues
      </NavLink>
    </div>
    <ul className="nav navbar-nav" role="navigation">
      <li><NavLink to="/repos">Repos</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>
  </nav>;

export default Nav;
