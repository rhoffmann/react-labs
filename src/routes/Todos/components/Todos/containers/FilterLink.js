import React from 'react';
import Link from '../components/Link';
import { SET_VISIBILITY_FILTER } from '../actions';

const FilterLink = React.createClass({
  propTypes: {
    store: React.PropTypes.object.isRequired
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
    const props = this.props;
    const { store } = props;
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

export default FilterLink;
