import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import './index.css';
import HomeView from './view/Home.view'

import { PersistGate } from 'redux-persist/integration/react'
import { store, persistedStore } from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <HomeView /> 
      </PersistGate>
    </Provider>
  </React.StrictMode>,

document.getElementById('root')
);