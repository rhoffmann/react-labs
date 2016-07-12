import todos from './todosReducer';
import visibilityFilter from './filterReducer';
import { combineReducers } from 'redux';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
