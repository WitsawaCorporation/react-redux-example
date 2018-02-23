import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { session } from './modules';

const history = createHistory();
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const create = () => createStore(
  combineReducers({
    [session.NAME]: session.reducer,
    router: routerReducer,
  }),
  composeEnhancers(applyMiddleware(middleware, thunk)),
);

export { create, history };
