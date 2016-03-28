module.exports = {
  path: 'repos',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/RepositoryNavigator').default);
    });
  },
  getIndexRoute(location, cb) {
    cb(null, {
      component: require('./components/RepoEmpty').default
    });
  },
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/RepositoryList')
      ]);
    });
  }
};
