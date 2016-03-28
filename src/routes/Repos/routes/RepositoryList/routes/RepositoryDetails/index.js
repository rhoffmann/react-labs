module.exports = {
  path: ':repoName',
  getComponent(location, cb) {
    cb(null, require('./components/RepositoryDetails').default);
  }
};
