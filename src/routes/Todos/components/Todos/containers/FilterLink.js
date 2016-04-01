import React from 'react';
import Link from '../components/Link';
import store from '../store';
import { SET_VISIBILITY_FILTER } from '../actions/index';

const FilterLink = React.createClass({
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  },
  componentWillUnmount() {
    this.unsubscribe();
  },
  setFilter(filter) {
    store.dispatch({
      type: SET_VISIBILITY_FILTER,
      filter
    });
  },
  render() {
    const props = this.props;
    const state = store.getState(); // BAD
    const isActive = props.filter === state.visibilityFilter;

    return (
      <Link active={isActive}
        onClick={() => this.setFilter(props.filter) }
      >
        {props.children}
      </Link>
    );
  }
});

FilterLink.propTypes = {
};

export default FilterLink;
