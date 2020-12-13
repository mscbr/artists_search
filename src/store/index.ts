import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import favReducer from './favourites/reducer';

const rootReducer = combineReducers({
  favReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export type AppState = ReturnType<typeof rootReducer>;
export default store;
