import React from 'react';
import Alert from './Alert';

const LoadingError = ({ error }) => {
  return <Alert type="warning" message={error.message} />;
};

LoadingError.propTypes = {
  error: React.PropTypes.object
};

export default LoadingError;
