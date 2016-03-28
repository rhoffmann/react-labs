import React from 'react';
import { composeWithPromise } from 'react-komposer';
import RepositoryData from './RepositoryData';
import Spinner from '../global/Spinner';
import LoadingError from '../global/LoadingError';
import createCachedRequest from './cachedRequest';

const onPropsChange = (props) => {
  const userName = props.params.userName;
  const repoName = props.params.repoName;
  const cacheKey = `${userName}/${repoName}`;

  const repo = createCachedRequest(`https://api.github.com/repos/${userName}/${repoName}`);

  return repo(cacheKey).then((data) => {
    return {
      repoData: data,
      repoName,
      userName
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
