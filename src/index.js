import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {
  create as createStore,
  // history,
} from './redux/createStore';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
      <App />
    {/* </ConnectedRouter>, */}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
