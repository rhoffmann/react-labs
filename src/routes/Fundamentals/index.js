module.exports = {
  path: 'fundamentals',
  component: require('./components/ReactFundamentals').default,
  childRoutes: [
    {
      path: '06-owner-ownee',
      component: require('./components/06-Owner-Ownee').default
    }
  ]
};
