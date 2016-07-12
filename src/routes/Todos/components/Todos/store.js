import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducer/index';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

// reducers are already combined in reducer/index
const reducer = storage.reducer(reducers);
const engine = createEngine('my-todos');
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

function configureStore(initialState = {}) {
  const store = createStoreWithMiddleware(reducer, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}

const store = configureStore();

export const loadStore = () => {
  const load = storage.createLoader(engine);
  return load(store);
};

export default store;
