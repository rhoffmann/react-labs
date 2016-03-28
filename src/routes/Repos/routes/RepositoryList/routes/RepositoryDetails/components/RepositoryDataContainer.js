import React from 'react';
import { composeWithPromise } from 'react-komposer';
import RepositoryData from './RepositoryData';
import Spinner from 'global/Spinner';
import LoadingError from 'global/LoadingError';
import createCachedRequest from 'lib/cachedGithubRequest';

const cacheReq = createCachedRequest('repo');

const onPropsChange = (props) => {
  const userName = props.params.userName;
  const repoName = props.params.repoName;
  const cacheKey = `${userName}/${repoName}`;

  return cacheReq(`/repos/${userName}/${repoName}`, cacheKey)
    .then((data) => {
      return {
        repoData: data,
        userName,
        repoName
      };
    });
};

const MySpinner = () => (<Spinner text="Loading Repo..." />);

const RepositoryDataContainer = composeWithPromise(
  onPropsChange,
  MySpinner,
  LoadingError
)(RepositoryData);

export default RepositoryDataContainer;
