import { createStore } from 'redux';
import reducer from './reducer/index';

function configureStore(initialState = {
  todos: [{
    id: '1',
    text: 'one task',
    completed: false
  }]
}) {
  const store = createStore(reducer, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}

const store = configureStore();

export default store;
