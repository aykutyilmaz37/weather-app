import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

const middlewares = [reduxThunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
}) as any;

export const store = createStore(
  rootReducer,
  composedEnhancers(...enhancers),
);
