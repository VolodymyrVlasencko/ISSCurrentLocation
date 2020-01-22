import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import { rootReducer } from './store/reducers'
import './css/main.css'
import './scss/main.scss'

export const ACTION_CHANGE_ISS_LONGITUDE = 'ACTION_CHANGE_ISS_LONGITUDE'
export const ACTION_CHANGE_ISS_LATITUDE = 'ACTION_CHANGE_ISS_LATITUDE'
export const ACTION_CHANGE_ISS_CREW = 'ACTION_CHANGE_ISS_CREW'
export const ACTION_CHANGE_UTC_TIME = 'ACTION_CHANGE_UTC_TIME'

export const store = createStore(rootReducer)

render(
  <Provider store = { store }>
  <App />
  </Provider>, document.getElementById('root')
)
