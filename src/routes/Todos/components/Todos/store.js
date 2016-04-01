import { createStore } from 'redux';
import reducer from './reducer/index';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './actions/index';

function configureStore(initialState = {}) {
  const store = createStore(reducer, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}

const store = configureStore();

export default store;


export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
};
