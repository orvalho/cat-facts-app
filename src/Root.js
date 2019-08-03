import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

import async from './middlewares/async.js';
import reducers from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(async)));

export default({children}) => {
  return <Provider store={store}>{children}</Provider>;
};
