import React from 'react';
import reqwest from 'reqwest';
import { compose, composeWithPromise } from 'react-komposer';
import RepositoryList from './RepositoryList';

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
      console.log(`cache hit for ${userName}`);
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
        reject(new Error(err.status));
      });
    }
  });
};

const RepositoryListContainer = composeWithPromise(onPropsChange)(RepositoryList);

export default RepositoryListContainer;
