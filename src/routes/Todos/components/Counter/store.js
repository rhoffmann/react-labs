// import { createStore } from 'redux';
import createStore from '../lib/createStore';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
