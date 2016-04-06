import axios from 'axios';
import { GITHUB_OAUTH_TOKEN } from '../config';

export const cache = {};

const githubHeaders = {
  Authorization: `token ${GITHUB_OAUTH_TOKEN}`
  // 'User-Agent': 'react-labs'
};

const githubRequest = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 1000,
  headers: githubHeaders
});

export function isCached(topic, key) {
  return (typeof cache[ topic ] !== 'undefined') && (typeof cache[ topic ][ key ] !== 'undefined');
}

function createCachedRequest(topic) {
  cache[ topic ] = cache[ topic ] || {};
  return (url, cacheKey) => {
    const topicCache = cache[ topic ];
    return new Promise((resolve, reject) => {
      if (topicCache[ cacheKey ]) {
        console.log(`cache hit for ${topic}:${cacheKey}`);
        resolve(topicCache[ cacheKey ]);
      } else {
        githubRequest.get(url, {
          responseType: 'json',
          method: 'get',
        }).then((response) => {
          topicCache[ cacheKey ] = response.data;
          resolve(response.data);
        }).catch((response) => {
          if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            reject(response);
          } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            reject(new Error(`${response.status}: could not do`));
          }
        });
      }
    });
  };
}

export default createCachedRequest;
