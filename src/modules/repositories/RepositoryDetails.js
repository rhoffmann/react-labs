
import React from 'react';
import RepositoryDataContainer from './RepositoryDataContainer';
import RepositoryIssuesContainer from './RepositoryIssuesContainer';

const RepositoryDetails = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <RepositoryDataContainer {...props} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <RepositoryIssuesContainer {...props} />
        </div>
      </div>
    </div>

  );
};

export default RepositoryDetails;
