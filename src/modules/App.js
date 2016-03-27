import React from 'react';
import NavLink from './global/NavLink';

const App = (props) => {
  const queryStuff = Object.keys(props.location.query).map(q =>
    <div key={q}>{q}={props.location.query[ q ]}</div>
  );

  const homeLinkParams = {
    pathname: '/',
    query: { foo: 'bar' }
  };

  return (
    <div>
      <h1><NavLink to={homeLinkParams} onlyActiveOnIndex>Gettohub Issues</NavLink></h1>
      <ul className="nav" role="nav">
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/repos">Repos</NavLink></li>
      </ul>

      <div className="page-content">
        { props.children }
      </div>

      <div className="debug">
        { queryStuff }
      </div>
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.object,
  location: React.PropTypes.object
};

export default App;
