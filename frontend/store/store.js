import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger) //
  )
);

export default configureStore;



// const configureStore = (preloadedState = {}) => {
//   let middleware = [thunk];
//   if (process.evn.NODE_ENV === 'production') {
//     middleware = [...middleware, logger]
//   }
//   return (createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware(...middleware) //
//   ))
// };