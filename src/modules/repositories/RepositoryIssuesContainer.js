import React from 'react';
import reqwest from 'reqwest';
import { compose, composeWithPromise } from 'react-komposer';
import RepositoryIssues from './RepositoryIssues';
import Spinner from '../global/Spinner';
import LoadingError from '../global/LoadingError';

const cache = {};

const onPropsChange = (props) => {
  const userName = props.params.userName;
  const repoName = props.params.repoName;
  const cacheKey = `${userName}/${repoName}`;

  return new Promise((resolve, reject) => {
    const resolveWithCache = (key) => {
      console.log('issues cache', cache[ key ]);
      return resolve({
        issues: cache[ key ],
        repoName,
        userName
      });
    };

    if (cache[ cacheKey ]) {
      resolveWithCache(cacheKey);
    } else {
      reqwest({
        url: `https://api.github.com/repos/${userName}/${repoName}/issues`,
        type: 'json',
        method: 'get'
      }).then((resp) => {
        cache[ cacheKey ] = resp;
        resolveWithCache(cacheKey);
      }, (err, msg) => {
        const errMsg = JSON.parse(err.response).message;
        reject(new Error(`${err.status}: ${errMsg}`));
      });
    }
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
