import React from 'react';
import Link from '../components/Link';
import { SET_VISIBILITY_FILTER } from '../actions';

const FilterLink = React.createClass({
  propTypes: {
    store: React.PropTypes.object.isRequired,
    filter: React.PropTypes.string.isRequired,
    children: React.PropTypes.object
  },
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  },
  componentWillUnmount() {
    this.unsubscribe();
  },
  setFilter(filter) {
    const { store } = this.props;
    store.dispatch({
      type: SET_VISIBILITY_FILTER,
      filter
    });
  },
  render() {
    const { store, filter, children } = this.props;
    const state = store.getState(); // BAD
    const isActive = filter === state.visibilityFilter;

    return (
      <Link active={isActive} onClick={() => this.setFilter(filter) } >
        {children}
      </Link>
    );
  }
});

export default FilterLink;
