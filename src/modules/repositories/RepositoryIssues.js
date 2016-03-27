import React from 'react';

const RepositoryIssues = ({ issues, repoName, userName }) => {
  const issuesList = issues.map((issue) => {
    return (
      <a href="{issue.url}" target="_blank" className="list-group-item">
        <h4 className="list-group-item-heading">
          <span className="label label-default">#{issue.number}</span>
          &nbsp;{issue.title}
          <span className="label label-primary">{issue.status}</span>
        </h4>
        <p className="list-group-item-text">{issue.body}</p>
      </a>
    );
  });

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        Issues
      </div>
      <div className="panel-body">
        <div className="list-group">
          { issues ? issuesList : 'no open issues' }
        </div>
      </div>
    </div>
  );
};

RepositoryIssues.propTypes = {
  issues: React.PropTypes.array,
  repoName: React.PropTypes.string,
  userName: React.PropTypes.string
};

export default RepositoryIssues;
