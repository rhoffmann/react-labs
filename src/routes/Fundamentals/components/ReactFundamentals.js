import React from 'react';
import ReactFundamentalsNav from './ReactFundamentalsNav';

const ReactFundamentals = (props) =>
  <div>
    <h2>React Fundamentals</h2>
    <ReactFundamentalsNav />
    <div className="row">
      <div className="col-xs-12">
        { props.children }
      </div>
    </div>
  </div>;

ReactFundamentals.propTypes = {
  children: React.PropTypes.object
};

export default ReactFundamentals;
