import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Provider from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = compose()
let reducer = ''
let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provide store={store}r>
    <App/>
  </Provider>,
  document.getElementById('root'));