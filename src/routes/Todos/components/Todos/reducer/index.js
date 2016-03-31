import todos from './todos_reducer';
import visibilityFilter from './filter_reducer';
import { combineReducers } from 'redux';
// import { combineReducers } from '../../lib/combineReducers';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
