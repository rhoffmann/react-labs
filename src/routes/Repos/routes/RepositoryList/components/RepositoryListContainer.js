import React from 'react';
import { composeWithPromise } from 'react-komposer';
import RepositoryList from './RepositoryList';
import Spinner from 'global/Spinner';
import LoadingError from 'global/LoadingError';
import createCachedRequest, { isCached } from 'lib/cachedGithubRequest';

const cacheReq = createCachedRequest('repos');

const onPropsChange = (props) => {
  const userName = props.params.userName;
  return cacheReq(`/users/${userName}/repos`, userName)
    .then((data) => {
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
