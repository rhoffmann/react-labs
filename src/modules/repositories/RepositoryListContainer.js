import React from 'react';
import reqwest from 'reqwest';
import { compose, composeWithPromise } from 'react-komposer';
import RepositoryList from './RepositoryList';
import Spinner from '../global/Spinner';
import LoadingError from '../global/LoadingError';

const reposCache = {};

const onPropsChange = (props) => {
  const userName = props.params.userName;

  return new Promise((resolve, reject) => {
    const resolveWithCache = (user) => {
      return resolve({
        userName: user,
        repositories: reposCache[ user ]
      });
    };

    if (reposCache[ userName ]) {
      resolveWithCache(userName);
    } else {
      reqwest({
        url: `https://api.github.com/users/${userName}/repos`,
        type: 'json',
        method: 'get'
      }).then((resp) => {
        reposCache[ userName ] = resp;
        resolveWithCache(userName);
      }, (err, msg) => {
        console.dir(err);
        const errMsg = JSON.parse(err.response).message;
        reject(new Error(`${err.status}: ${errMsg}`));
      });
    }
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
