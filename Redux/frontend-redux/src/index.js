import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'

import { render } from 'react-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


import store from '../src/redux/store'

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options} >
    <App />
    </AlertProvider>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
