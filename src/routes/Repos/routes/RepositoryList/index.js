module.exports = {
  path: ':userName',
  getComponent(location, cb) {
    cb(null, require('./components/RepositoryListContainer').default);
  },
  getChildRoutes(location, cb) {
    cb(null, [
      require('./routes/RepositoryDetails')
    ]);
  }
};
