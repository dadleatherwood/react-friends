import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('root')

  ReactDOM.render(
    <App />, reactNode
  )

});
registerServiceWorker();
