import React from 'react';
import reqwest from 'reqwest';
import Message from '../global/Message';

export default React.createClass({
  propTypes: {
    // userName: React.PropTypes.string,
    // repoName: React.PropTypes.string,
    params: React.PropTypes.object
  },

  getInitialState() {
    return {
      repoData: {}
    };
  },

  componentWillMount() {
    this.fetchRepoData(this.props.params);
  },

  componentWillReceiveProps(nextProps) {
    this.fetchRepoData(nextProps.params);
  },

  componentWillUnmount() {
    // this.fetchRequest.cancel();
  },

  fetchRepoData(params) {
    // TODO: cache request by userName and repoName params
    return reqwest({
      url: `https://api.github.com/repos/${params.userName}/${params.repoName}`,
      type: 'json',
      method: 'get'
    }).then((resp) => {
      console.dir(resp);
      this.setState({
        repoData: resp
      });
    }, (err, msg) => {
      this.setState({
        error: err,
        message: JSON.parse(err.response).message || msg
      });
    });
  },

  render() {
    const repo = this.state.repoData;
    let errorMessage = '';

    if (this.state.error) {
      errorMessage = <Message type="error" message={this.state.message} />;
    }

    return (
      <div>
        <h2>{this.props.params.userName}/{this.props.params.repoName}</h2>
        { errorMessage }
        <div className="repo-data">
          <a href={ repo.html_url }>{ repo.full_name }</a>
          <div>{repo.description}</div>
          <div>{repo.ssh_url}</div>
          <div>{repo.language}</div>
        </div>
      </div>
    );
  }
});
