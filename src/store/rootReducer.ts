import { combineReducers } from 'redux';
import appReducer from './app/reducer';

export const allReducer = combineReducers({
  app: appReducer,
});

export const rootReducer = (state:any, action:any) => {
  return allReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
