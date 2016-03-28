import React from 'react';
import NavLink from 'global/NavLink';
import { isCached } from 'lib/cachedGithubRequest';

const RepositoryList = ({ children, repositories, userName }) => {
  const reposList = repositories.map((repo) => {
    const cacheKey = `${userName}/${repo.name}`;
    const repoIsCached = isCached('repo', cacheKey);
    const repoUrl = `/repos/${userName}/${repo.name}`;
    return (
      <NavLink className="list-group-item" key={repo.name} to={repoUrl}>
        { repoIsCached ? <span className="label label-success">c</span> : '' }
        &nbsp;{repo.name}
        <span className="badge">{repo.open_issues}</span>
      </NavLink>
    );
  });

  return (
    <div className="row">
      <div className="col-xs-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            Repos for {userName}
          </div>
          <div className="panel-body">
            <div className="list-group">
              { reposList }
            </div>
          </div>
        </div>

      </div>
      <div className="col-xs-8">
        { children }
      </div>
    </div>
  );
};

RepositoryList.propTypes = {
  children: React.PropTypes.object,
  repositories: React.PropTypes.arrayOf(React.PropTypes.object),
  userName: React.PropTypes.string,
  params: React.PropTypes.object
};

export default RepositoryList;
