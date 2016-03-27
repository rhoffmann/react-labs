import React from 'react';

const Repository = ({ repoData, repoName, userName }) => {
  const repo = repoData;

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        {userName}/{repoName}
      </div>
      <div className="panel-body">
        <a target="_blank" href={ repo.html_url }>Find on Github</a>
        <div>{repo.description}</div>
        <div>{repo.ssh_url}</div>
        <span className="label label-primary">{repo.language}</span>&nbsp;
        <span className="label label-default">{repo.watchers} Watchers</span>
      </div>
    </div>
  );
};

Repository.propTypes = {
  userName: React.PropTypes.string,
  repoName: React.PropTypes.string,
  repoData: React.PropTypes.object
};

export default Repository;
