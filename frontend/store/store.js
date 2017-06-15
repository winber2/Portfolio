import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers/root_reducer';

const fuckingUselessReducer = () => ({
  fucking: {},
  useless: {}
});

const configureStore = (preloadedState = {}) => (
  createStore(fuckingUselessReducer)
);

export default configureStore;
