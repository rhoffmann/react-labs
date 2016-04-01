import uuid from 'uuid';

// action constants

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// action creators

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
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

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
