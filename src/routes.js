import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './modules/App';
import Home from './modules/pages/Home';
import About from './modules/pages/About';
import RepositoryNavigator from './modules/repositories/RepositoryNavigator';
import RepositoryListContainer from './modules/repositories/RepositoryListContainer';
import RepositoryDetails from './modules/repositories/RepositoryDetails';

const RepoEmpty = () => <h2>Repos</h2>;

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Redirect from="/repositories/*" to="/repos" />
    <Route path="/repos" component={RepositoryNavigator}>
      <IndexRoute component={RepoEmpty} />
      <Route path=":userName" component={RepositoryListContainer}>
        <Route path=":repoName" components={ RepositoryDetails } />
      </Route>
    </Route>
    <Route path="/about" component={About} />
  </Route>
);

// <IndexRoute components={ { list: RepositoryList, detail: Repository } } />
