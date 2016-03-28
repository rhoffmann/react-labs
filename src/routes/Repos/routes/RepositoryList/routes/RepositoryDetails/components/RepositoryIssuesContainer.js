import React from 'react';
import { compose, composeWithPromise } from 'react-komposer';
import RepositoryIssues from './RepositoryIssues';
import Spinner from 'global/Spinner';
import LoadingError from 'global/LoadingError';
import createCachedRequest from 'lib/cachedGithubRequest';

const cacheReq = createCachedRequest('issues');

const onPropsChange = (props) => {
  const userName = props.params.userName;
  const repoName = props.params.repoName;
  const cacheKey = `${userName}/${repoName}`;

  return cacheReq(`/repos/${userName}/${repoName}/issues`, cacheKey)
    .then((data) => {
      return {
        issues: data,
        userName,
        repoName
      };
    });
};

const MySpinner = () => (<Spinner text="Loading Issues..." />);

const RepositoryIssuesContainer = composeWithPromise(
  onPropsChange,
  MySpinner,
  LoadingError
  // { pure: true }
)(RepositoryIssues);

export default RepositoryIssuesContainer;
