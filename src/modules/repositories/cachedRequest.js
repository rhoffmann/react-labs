import reqwest from 'reqwest';

function createCachedRequest(url) {
  return (cacheKey) => {
    const cache = {};
    return new Promise((resolve, reject) => {
      const resolveWithCache = (key) => {
        return resolve(cache[ key ]);
      };
      if (cache[ cacheKey ]) {
        resolveWithCache(cacheKey);
      } else {
        reqwest({
          url,
          type: 'json',
          method: 'get'
        }).then((resp) => {
          cache[ cacheKey ] = resp;
          resolveWithCache(cacheKey);
        }, (err, msg) => {
          const errMsg = JSON.parse(err.response).message;
          reject(new Error(`${err.status}: ${errMsg}`));
        }).catch((reason) =>
          reject(new Error(reason))
        );
      }
    });
  };
}

export default createCachedRequest;
