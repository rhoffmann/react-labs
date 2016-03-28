import React from 'react';
import Navigation from 'global/Nav';

const App = (props) => {
  const queryStuff = Object.keys(props.location.query).map(q =>
    <div key={q}>{q}={props.location.query[ q ]}</div>
  );

  return (
    <div>
      <Navigation />
      <div className="container page-content">
        { props.children }
      </div>
      <div className="debug">
        DEBUG:
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
