import NavLink from 'global/NavLink';
import Icon from 'global/Icon';
import React from 'react';

const homeLinkParams = {
  pathname: '/',
  query: { foo: 'bar' }
};

const Navigation = () =>
  <nav className="navbar navbar-default">
    <div className="navbar-header">
      <NavLink className="navbar-brand" to={homeLinkParams} onlyActiveOnIndex>
        React <Icon type="heart" /> Labs
      </NavLink>
    </div>
    <ul className="nav navbar-nav" role="navigation">
      <li><NavLink to="/repos">Repos</NavLink></li>
      <li><NavLink to="/todos">Todos</NavLink></li>
      <li><NavLink to="/fundamentals">Fundamentals</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>
  </nav>;

export default Navigation;
