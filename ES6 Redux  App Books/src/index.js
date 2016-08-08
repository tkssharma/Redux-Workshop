import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/app';
import reducers from './reducers';



const finalCreateStore = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
	)(createStore);

const store = finalCreateStore(reducers);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));
