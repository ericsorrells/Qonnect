// ========================================================================================
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './router/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
// ========================================================================================
import Home from '../src/components/Home/Home';
// ========================================================================================
import './styles/styles.scss';
// ========================================================================================

const store = configureStore();

const masterRouter = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(masterRouter, document.getElementById('app'));
