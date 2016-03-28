import lessons from './components/lessons';

module.exports = {
  path: 'fundamentals',
  component: require('./components/ReactFundamentals').default,
  childRoutes: lessons.map((c) => {
    return {
      path: c.path,
      component: c.component
    };
  })
};
