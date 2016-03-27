import React from 'react';
import NavLink from '../global/NavLink';

const RepositoryList = ({ children, repositories, userName }) => {
  const reposList = repositories.map((repo) => {
    const repoUrl = `/repos/${userName}/${repo.name}`;
    return (<li key={repo.name}><NavLink to={repoUrl}>{repo.name}</NavLink></li>);
  });

  return (
    <div>
      <h2>Repos for {userName}</h2>
      <ul className="repos-list">
        { reposList }
      </ul>
      <div className="repo-section">
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
