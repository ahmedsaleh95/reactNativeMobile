import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React, {Component} from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import { persistStore, autoRehydrate } from 'redux-persist'
import { apiReducer } from './src/reducers/apiReducer'
const store = createStore(apiReducer)
// persistStore(store);

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
AppRegistry.registerComponent(appName, () => AppWithStore);
