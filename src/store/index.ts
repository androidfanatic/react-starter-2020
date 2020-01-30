import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import apiMiddleware from 'src/middlewares/api';
import rootReducer from 'src/store/rootReducer';

export const history = createBrowserHistory();

const middleware: Middleware[] = [thunk, apiMiddleware];
const { NODE_ENV } = process.env;

if (NODE_ENV !== 'production') {
  middleware.push(logger);
}
const composeEnhancers =
  NODE_ENV !== 'production' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const initialState = {};

const store = createStore(rootReducer, initialState, enhancers);

export default store;
