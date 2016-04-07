const { loadStore } = require('./components/Todos/store');

module.exports = {
  path: 'todos',
  getComponent(location, cb) {
    // System.import('./components/Todos')
    //   .then(cb)
    //   .catch(() => {
    //     console.error('error importing Todos');
    //   });
    require.ensure([], (require) => {
      cb(null, require('./components/Todos').default);
    });
  },
  onEnter(nextState, replace, cb) {
    loadStore()
      .then((newState) => {
        console.log('Loaded state:', newState);
        cb();
      })
      .catch(() => console.log('Failed to load previous state'));
  }
};
