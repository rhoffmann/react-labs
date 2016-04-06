import uuid from 'uuid';

import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SET_VISIBILITY_FILTER
} from './actions';

// action creators

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  };
};

export const addTodo = (value) => {
  const text = value.trim();
  return {
    type: ADD_TODO,
    id: uuid.v4(),
    text
  };
};

export const addTodoById = (id, value) => {
  const text = value.trim();
  return {
    type: ADD_TODO,
    id: id,
    text
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
