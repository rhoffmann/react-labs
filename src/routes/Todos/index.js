module.exports = {
  path: 'todos',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Todos').default);
    });
  }
};
