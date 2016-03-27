import React from 'react';
import reqwest from 'reqwest';
import { composeWithPromise } from 'react-komposer';
import Repository from './Repository';
import Spinner from '../global/Spinner';
import LoadingError from '../global/LoadingError';

const reposCache = {};

const onPropsChange = (props) => {
  const userName = props.params.userName;
  const repoName = props.params.repoName;
  const cacheKey = `${userName}/${repoName}`;

  return new Promise((resolve, reject) => {
    const resolveWithCache = (key) => {
      return resolve({
        repoData: reposCache[ key ],
        repoName,
        userName
      });
    };

    if (reposCache[ cacheKey ]) {
      resolveWithCache(cacheKey);
    } else {
      reqwest({
        url: `https://api.github.com/repos/${userName}/${repoName}`,
        type: 'json',
        method: 'get'
      }).then((resp) => {
        reposCache[ cacheKey ] = resp;
        resolveWithCache(cacheKey);
      }, (err, msg) => {
        reject(new Error(err.status));
      }).catch((reason) =>
        reject(new Error(reason))
      );
    }
  });
};

const MySpinner = () => (<Spinner text="Loading Repo..." />);

const RepositoryContainer = composeWithPromise(onPropsChange, MySpinner, LoadingError)(Repository);

export default RepositoryContainer;
