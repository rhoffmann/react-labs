import React from 'react';

import App from './components/App';
import Home from './components/Home';

const rootRoute = {
  // component: 'div',
  childRoutes: [{
    path: '/',
    indexRoute: {
      component: Home
    },
    component: App,
    childRoutes: [
      require('./routes/Repos'),
      require('./routes/Fundamentals'),
      require('./routes/Todos'),
      require('./routes/About')
    ]
  }]
};

export default rootRoute;
