import NavLink from './NavLink';
import Icon from './Icon';
import React from 'react';

const homeLinkParams = {
  pathname: '/',
  query: { foo: 'bar' }
};

const Nav = () =>
  <nav className="navbar navbar-default">
    <div className="navbar-header">
      <NavLink className="navbar-brand" to={homeLinkParams} onlyActiveOnIndex>
        <Icon type="heart" /> React
      </NavLink>
    </div>
    <ul className="nav navbar-nav" role="navigation">
      <li><NavLink to="/repos">Repos</NavLink></li>
      <li><NavLink to="/todos">Todos</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>
  </nav>;

export default Nav;
