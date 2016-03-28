import React from 'react';

// const md = require('markdown-it')({
//   html: true,
//   linkify: true,
//   typographer: true
// });

const RepositoryIssues = ({ issues, repoName, userName }) => {
  const issuesList = issues.map((issue) => {
    // const bodyHTML = md.render(issue.body);
    return (
      <a key={issue.id} href={issue.html_url} target="_blank" className="list-group-item">
        <h4 className="list-group-item-heading">
          <span className="label label-default">#{issue.number}</span>
          &nbsp;{issue.title}
          <span className="label label-primary">{issue.status}</span>
        </h4>
        <p className="list-group-item-text">{issue.body}</p>
      </a>
    );
  });

  const noIssues = () =>
    <div className="list-group-item">
      <p className="list-group-item-text">no open issues</p>
    </div>;

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        Issues
      </div>
      <div className="panel-body">
      </div>
      <div className="list-group">
        { issues.length ? issuesList : noIssues() }
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
