import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import history from './Servicos/history';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router basename={baseUrl} history = {history}>

    <App  />
  </Router>,
  rootElement);

registerServiceWorker();

