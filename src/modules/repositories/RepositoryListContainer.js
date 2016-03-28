import React from 'react';
import reqwest from 'reqwest';
import { compose, composeWithPromise } from 'react-komposer';
import RepositoryList from './RepositoryList';
import Spinner from '../global/Spinner';
import LoadingError from '../global/LoadingError';
import createCachedRequest from './cachedRequest';

const onPropsChange = (props) => {
  const userName = props.params.userName;
  const repos = createCachedRequest(`https://api.github.com/users/${userName}/repos`);

  return repos(userName).then((data) => {
    return {
      repositories: data,
      userName
    };
  });
};

const MySpinner = () => (<Spinner text="Loading Repositories..." />);

const RepositoryListContainer = composeWithPromise(
  onPropsChange,
  MySpinner,
  LoadingError
  // { pure: true }
)(RepositoryList);

export default RepositoryListContainer;
