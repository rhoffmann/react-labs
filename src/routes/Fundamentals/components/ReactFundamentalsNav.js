import React from 'react';
import NavLink from 'global/NavLink';
import lessons from './lessons';

const ReactFundamentalsNav = (props) => {
  const componentsList = lessons.map((comp) => {
    const link = `/fundamentals/${comp.path}`;
    return (
      <li key={comp.path}><NavLink to={link}>{comp.path}</NavLink></li>
    );
  });
  return (
    <ul className="nav nav-pills">
      { componentsList }
    </ul>
  );
};

export default ReactFundamentalsNav;
